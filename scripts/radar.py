#!/usr/bin/env python3
"""Create an unpublished research brief. Never write to src/content or invent facts."""
import argparse
import json
from datetime import date
from pathlib import Path
from urllib.parse import urlsplit

ROOT_DIR = Path(__file__).resolve().parent.parent
DRAFTS_DIR = ROOT_DIR / 'editorial' / 'drafts'

def valid_source(value):
    parsed = urlsplit(value)
    if parsed.scheme != 'https' or not parsed.hostname or parsed.username or parsed.password:
        raise ValueError('An official HTTPS source URL without credentials is required')
    return value

def create_brief(name, source_url, output_dir=DRAFTS_DIR):
    if not name or not name.strip():
        raise ValueError('A product name is required')
    source = valid_source(source_url)
    # An opaque filename avoids interpreting product names as filesystem paths.
    import hashlib
    identifier = hashlib.sha256((name.strip() + '\n' + source).encode()).hexdigest()[:16]
    directory = Path(output_dir)
    public = (ROOT_DIR / 'src').resolve()
    resolved = directory.resolve()
    if resolved == public or public in resolved.parents or resolved == (ROOT_DIR / 'public').resolve() or (ROOT_DIR / 'public').resolve() in resolved.parents:
        raise ValueError('Research briefs must remain outside published source folders')
    directory.mkdir(parents=True, exist_ok=True)
    target = directory / (identifier + '.json')
    brief = {
        'status': 'pending_editorial_review',
        'name': name.strip(),
        'submittedSourceUrl': source,
        'createdAt': date.today().isoformat(),
        'sourceConsulted': False,
        'checklist': [
            'Verify publisher identity and official domain',
            'Read product documentation and pricing; record consultation date',
            'Write a source-based summary without untested claims',
            'Do not add ratings, review counts, compliance badges or invented referral URLs',
            'Record actual program approval before adding an affiliate link',
            'Review the content before creating a published profile',
        ],
    }
    # Re-running the workflow must not overwrite a brief already being reviewed.
    if not target.exists():
        with target.open('x', encoding='utf-8') as stream:
            json.dump(brief, stream, ensure_ascii=False, indent=2)
            stream.write('\n')
    return target

def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--name')
    parser.add_argument('--source-url')
    args = parser.parse_args(argv)
    if not args.name and not args.source_url:
        print('No automatic publication. Supply --name and --source-url to create an unpublished research brief.')
        return 0
    if not args.name or not args.source_url:
        parser.error('--name and --source-url must be supplied together')
    try:
        target = create_brief(args.name, args.source_url)
    except ValueError as error:
        parser.error(str(error))
    print(f'Unpublished research brief: {target.name}. Source consultation and editorial review are still required.')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
