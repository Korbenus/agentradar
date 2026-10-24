import contextlib
import io
import json
import sys
import tempfile
import unittest
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
import radar

class ResearchSafetyTests(unittest.TestCase):
    def test_no_arguments_never_publish(self):
        folder = radar.ROOT_DIR / 'src' / 'content' / 'agents'
        before = {p.name: p.read_bytes() for p in folder.glob('*.md')}
        with contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(radar.main([]), 0)
        self.assertEqual(before, {p.name: p.read_bytes() for p in folder.glob('*.md')})

    def test_brief_is_explicitly_unreviewed_and_preserves_work(self):
        with tempfile.TemporaryDirectory() as directory:
            path = radar.create_brief('../../unsafe name', 'https://publisher.example/product', directory)
            self.assertEqual(path.parent, Path(directory))
            data = json.loads(path.read_text(encoding='utf-8'))
            self.assertEqual(data['status'], 'pending_editorial_review')
            self.assertIs(data['sourceConsulted'], False)
            self.assertNotIn('rating', data)
            self.assertNotIn('affiliateUrl', data)
            path.write_text('editorial work in progress', encoding='utf-8')
            self.assertEqual(radar.create_brief('../../unsafe name', 'https://publisher.example/product', directory).read_text(encoding='utf-8'), 'editorial work in progress')

    def test_invalid_input_never_creates_a_brief(self):
        with tempfile.TemporaryDirectory() as directory:
            for url in ['javascript:alert(1)', 'http://publisher.example', 'https://user:password@publisher.example']:
                with self.assertRaises(ValueError):
                    radar.create_brief('Product', url, directory)
            with self.assertRaises(ValueError):
                radar.create_brief('', 'https://publisher.example', directory)
            self.assertEqual(list(Path(directory).iterdir()), [])

    def test_briefs_cannot_be_written_to_public_source(self):
        with self.assertRaises(ValueError):
            radar.create_brief('Product', 'https://publisher.example', radar.ROOT_DIR / 'src' / 'content' / 'agents')
        with self.assertRaises(ValueError):
            radar.create_brief('Product', 'https://publisher.example', radar.ROOT_DIR / 'public')

if __name__ == '__main__':
    unittest.main()
