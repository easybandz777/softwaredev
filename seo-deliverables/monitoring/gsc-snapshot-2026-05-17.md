# GSC Snapshot — 2026-05-17

Skipped: `GSC_SERVICE_ACCOUNT_JSON` env var is not set.

To enable this snapshot:
1. Create a Google Cloud project, enable Search Console API.
2. Create a service account, download its JSON key.
3. In Search Console → Settings → Users and permissions, add the
   service-account email with Owner role for `quantlabusa.dev`.
4. Store the JSON key outside the repo, then:
   ```
   export GSC_SERVICE_ACCOUNT_JSON=/absolute/path/to/key.json
   ```
5. Re-run `npm run monitor:gsc`.

Full walkthrough: [SETUP-GSC-API.md](./SETUP-GSC-API.md)
