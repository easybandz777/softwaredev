# IndexNow Key — quantlabusa.dev

## Key
```
acdf51b933f8fa99caa87e28464ee464
```

## Key file URL
```
https://quantlabusa.dev/acdf51b933f8fa99caa87e28464ee464.txt
```

## Generated
- **Date:** 2026-05-12 (UTC)
- **Tool:** `openssl rand -hex 16`
- **Host:** `quantlabusa.dev`

## How it works
IndexNow is a standardized protocol supported by Bing, Yandex, Seznam, Naver
(and indirectly Google via Bing's index). To submit URLs we POST to:

- `https://api.indexnow.org/indexnow` (multi-engine fan-out)
- `https://www.bing.com/indexnow` (direct to Bing)
- `https://yandex.com/indexnow` (direct to Yandex)

Each request includes the `host`, this `key`, and `keyLocation` (the URL where
the key file is served) so engines can verify ownership of the domain by
fetching the key file and confirming it returns the same key string.

## Security note
IndexNow keys are **not secret**. They are designed to be served publicly at a
known URL on the domain — that's how engines verify ownership. Committing this
key to a public repo is therefore safe and expected.

The single security boundary: only the domain owner can place the matching
key file at the correct path. Other parties can know the key, but they cannot
serve it at `quantlabusa.dev/<KEY>.txt`, so engines will reject their
submissions for our host.

## Key file path in repo
- `public/acdf51b933f8fa99caa87e28464ee464.txt`
- Served by Next.js static files at `/acdf51b933f8fa99caa87e28464ee464.txt`
