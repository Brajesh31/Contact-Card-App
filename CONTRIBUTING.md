# 🛠️ Contributing

Thank you for considering a contribution.

## Before starting
1. Check existing issues and pull requests for duplicate work.
2. Open an issue for substantial features or behavior changes.
3. Keep the scope focused on the contact manager.

## Local setup

```bash
git clone https://github.com/Brajesh31/Contact-Card-App.git
cd Contact-Card-App
npm install
npm start
```

## Development workflow
1. Create a focused branch from `main`.
2. Make a small, reviewable change.
3. Keep React components and styling consistent with the current codebase.
4. Do not add real personal contact data, secrets, or generated dependency directories.
5. Update relevant documentation when behavior changes.

## Validation

```bash
npm run build
node scripts/validate-docs.js
```

Run `npm test -- --watchAll=false` after adding or changing tests. The current repository does not include application test files, so do not claim test coverage without creating and running tests.

## Pull requests
- Explain the problem and the chosen solution.
- List user-visible behavior changes.
- Link related issues.
- Include screenshots for UI changes when available.
- Describe validation commands and their actual results.
- Call out known limitations.

## Commit guidance
Use clear messages such as:
- `docs: document contact form workflow`
- `fix: validate contact fields`
- `test: cover contact list rendering`

## Review checklist
- [ ] Scope is focused.
- [ ] No secrets or private contact data are committed.
- [ ] Existing features are preserved.
- [ ] Relevant docs are updated.
- [ ] Build and applicable checks pass.
