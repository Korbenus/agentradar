import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, join, relative } from 'node:path';
const root = resolve('dist');
function walk(dir) {
  return readdirSync(dir).flatMap(name => {
    const path = join(dir,name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}
assert.ok(existsSync(root),'Run npm run build before the generated-site checks');
const publishedSlugs = readdirSync('src/content/agents').filter(name => name.endsWith('.md')).map(name => name.slice(0,-3));
const files = walk(root);
const pages = files.filter(file=>file.endsWith('.html'));
test('generated pages contain no fabricated referrals, ratings, audits or contact address',()=>{
  assert.ok(pages.length>0);
  for (const file of pages) {
    const html = readFileSync(file,'utf8');
    assert.doesNotMatch(html,/ref=agentradar|ratingCount|AggregateRating|AI Act OK|Verified Official Website|privacy@agentradar|15,000|15 000|Conforme AI Act UE|Last Audited|24\/7 AI Radar|Ã©|Ã¨/i,relative(root,file));
    assert.doesNotMatch(html,/https:\/\/(?:fonts\.googleapis|fonts\.gstatic|www\.google\.com\/s2)/,relative(root,file));
  }
});
test('every internal hyperlink, canonical and language alternate has a generated destination',()=>{
  for (const file of pages) {
    const html=readFileSync(file,'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'');
    const base = new URL('https://agentradar.pages.dev/'+relative(root,file).replaceAll('\\','/'));
    for (const match of html.matchAll(/<(?:a|link)\b[^>]*\bhref="([^"]+)"/g)) {
      const url=new URL(match[1].replaceAll('&amp;','&'),base);
      if(url.origin!==base.origin) continue;
      const path=resolve(root,'.'+decodeURIComponent(url.pathname));
      assert.ok(path.startsWith(root),url.href);
      assert.ok(existsSync(path) && statSync(path).isFile() || existsSync(join(path,'index.html')),`${relative(root,file)} -> ${url.pathname}`);
    }
  }
});
test('archives and research briefs are absent from the deployed files and RSS',()=>{
  assert.ok(files.every(file=>!relative(root,file).includes('editorial')));
  const rss=readFileSync(join(root,'rss.xml'),'utf8');
  assert.equal((rss.match(/<item>/g)||[]).length,publishedSlugs.length);
  assert.doesNotMatch(rss,/lovable-dev|manus-ai|decagon|ref=agentradar/);
  assert.ok(!existsSync(join(root,'agents','lovable-dev','index.html')));
});
test('every published profile exposes official sources, methodology and a source consultation date',()=>{
  const profiles=pages.filter(file=>/[\\/]agents[\\/]/.test(file));
  assert.equal(profiles.length,publishedSlugs.length*6);
  for (const file of profiles) {
    const html=readFileSync(file,'utf8');
    assert.match(html,/id="sources"/);
    assert.match(html,/datetime="\d{4}-\d{2}-\d{2}"/);
    assert.match(html,/href="(?:\/fr|\/es|\/de|\/it|\/ja)?\/methodology"/);
    assert.doesNotMatch(html,/rel="sponsored/);
    for(const source of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) {
      const data=JSON.parse(source[1]);
      assert.notEqual(data['@type'],'AggregateRating');
    }
  }
});
