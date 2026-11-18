# IOLinker Documentation

Public documentation for the agent and workflow automation workspace. English and Chinese guides are organized by customer tasks, with original node-reference URLs retained.

## Local development

Requires Node.js 22 or later.

```sh
npm ci
npm run docs:dev
```

Open the local address printed by VitePress. The default development host is local-only.

## Validation and build

```sh
npm run check
npm run docs:build
npm run test:browser
```

Browser tests expect a development server on `http://127.0.0.1:4174`; set `DOCS_PREVIEW_URL` when using another local address. Install the matching Chromium browser with `npx playwright install chromium` if it is not already available. Sandbox flags are not disabled.

`npm run docs:build` prepares public assets, validates source links, builds to `docs/.vitepress/dist` and checks original URLs, images, CNAME and the sensitive-media exclusion manifest. A successful static publication must come from a build that exits successfully, not from a partial local artifact.

## Content conventions

- Core guides have both `docs/guide/` and `docs/zh/guide/` versions.
- Existing article paths remain unchanged. Legacy robot tutorials are marked as compatibility references, not new-customer quick starts.
- Download versions are maintained only in the official website's `version.json`.
- `compatibility.json` records original URLs, referenced images and excluded assets. `security-exclusions.json` records reviewed sensitive media; the originals are not deleted by the migration. All historical article images are withheld until individually reviewed and recaptured; written steps and old URLs remain available.
- Generated public images and quarantined copies are maintained by `scripts/prepare-content.mjs`. Do not publish quarantined material.

GitHub Actions publishes only after a successful build, using `doc.iolinker.com`. This repository contains no live credentials for deployment.
