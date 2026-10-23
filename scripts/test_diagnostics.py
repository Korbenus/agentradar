import urllib.request
import json
import os
import ssl

ctx = ssl.create_default_context()

print("=" * 60)
print("DIAGNOSTIC AGENTRADAR - LIVE TESTS")
print("=" * 60)

# 1. Test live Cloudflare site
try:
    req = urllib.request.Request('https://agentradar.pages.dev/', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, context=ctx, timeout=10) as r:
        print(f"[OK] Site en ligne : HTTP {r.status}")
        headers = dict(r.headers)
        print(f"     X-Frame-Options        : {headers.get('x-frame-options', 'N/A')}")
        print(f"     X-Content-Type-Options : {headers.get('x-content-type-options', 'N/A')}")
        print(f"     CSP Header             : {'Présent' if 'content-security-policy' in headers else 'Absent'}")
        print(f"     HSTS Security          : {'Présent' if 'strict-transport-security' in headers else 'Absent'}")
except Exception as e:
    print(f"[ERR] Erreur vérification site : {e}")

# 2. Test GitHub repository & workflows
try:
    req2 = urllib.request.Request('https://api.github.com/repos/Korbenus/agentradar/commits/main', headers={'User-Agent': 'Python'})
    with urllib.request.urlopen(req2, context=ctx, timeout=10) as r2:
        commit_data = json.loads(r2.read().decode())
        sha = commit_data['sha'][:7]
        msg = commit_data['commit']['message'].splitlines()[0]
        print(f"[OK] Dépôt GitHub synchronisé : Commit {sha} ({msg})")
except Exception as e:
    print(f"[ERR] Erreur vérification GitHub : {e}")

# 3. Test GitHub Actions Workflow runs
try:
    req3 = urllib.request.Request('https://api.github.com/repos/Korbenus/agentradar/actions/runs', headers={'User-Agent': 'Python'})
    with urllib.request.urlopen(req3, context=ctx, timeout=10) as r3:
        runs_data = json.loads(r3.read().decode())
        total_runs = runs_data.get('total_count', 0)
        print(f"[OK] GitHub Actions : {total_runs} exécution(s) enregistrée(s)")
        for run in runs_data.get('workflow_runs', [])[:3]:
            print(f"     -> Run #{run.get('run_number')}: {run.get('name')} | Status: {run.get('status')} | Conclusion: {run.get('conclusion')}")
except Exception as e:
    print(f"[INFO] GitHub Actions runs : {e}")

# 4. Test Google AI Studio API directly
print("-" * 60)
print("TEST GOOGLE AI STUDIO (GEMINI)")
key = os.environ.get("GEMINI_API_KEY", "").strip()

# Check .env file if key exists there
env_file = os.path.join(os.path.dirname(__file__), "..", ".env")
if not key and os.path.exists(env_file):
    with open(env_file, "r", encoding="utf-8") as f:
        for line in f:
            if line.startswith("GEMINI_API_KEY="):
                key = line.split("=", 1)[1].strip()

if not key:
    print("[INFO] Aucune clé locale détectée dans .env (la clé est enregistrée dans GitHub Secrets)")
    print("       Pour tester Google AI Studio en local, tu peux créer un fichier .env avec : GEMINI_API_KEY=AIzaSy...")
else:
    print(f"[INFO] Clé détectée : {key[:6]}... (Longueur: {len(key)})")
    # Test call to Google AI Studio with gemini-2.5-flash or gemini-1.5-flash or gemini-2.0-flash
    test_models = ["gemini-2.5-flash", "gemini-1.5-flash", "gemini-2.0-flash"]
    model_ok = False
    for mod in test_models:
        test_url = f"https://generativelanguage.googleapis.com/v1beta/models/{mod}:generateContent?key={key}"
        payload = {"contents": [{"parts": [{"text": "Reply with only: OK"}]}]}
        req_ai = urllib.request.Request(test_url, data=json.dumps(payload).encode("utf-8"), headers={"Content-Type": "application/json"}, method="POST")
        try:
            with urllib.request.urlopen(req_ai, context=ctx, timeout=10) as r_ai:
                resp_data = json.loads(r_ai.read().decode())
                txt = resp_data["candidates"][0]["content"]["parts"][0]["text"].strip()
                print(f"[SUCCESS] Modèle '{mod}' opérationnel ! Réponse de Gemini : {txt}")
                model_ok = True
                break
        except urllib.error.HTTPError as he:
            err_body = he.read().decode()
            print(f"[DEBUG] Modèle '{mod}' HTTP {he.code}: {err_body[:100]}...")
        except Exception as ex:
            print(f"[DEBUG] Modèle '{mod}' erreur : {ex}")
    
    if not model_ok:
        print("[WARN] La clé locale n'a pas pu valider d'appel. Vérifie qu'il s'agit bien d'une clé Google AI Studio (AIzaSy...).")

print("=" * 60)
