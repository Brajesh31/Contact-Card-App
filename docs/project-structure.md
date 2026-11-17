# 🗂️ Project structure

## Source tree

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/              # Structured repository issue forms
│   ├── workflows/                   # CI and documentation validation
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── architecture/                # System and data-flow notes
│   ├── assets/                      # Original project SVG illustrations
│   ├── security/                    # Security policy and threat assessment
│   ├── templates/                   # Reusable engineering templates
│   └── website/                     # Screen, UI, and responsive documentation
├── public/
│   └── index.html                   # HTML shell and root mount element
├── scripts/
│   └── validate-docs.js             # Local Markdown-link validation
├── src/
│   ├── App.css                      # Global page and form styling
│   ├── App.js                       # Top-level component composition
│   ├── ContactCard.css              # Contact card presentation
│   ├── ContactContext.js             # In-memory contact state
│   ├── ContactForm.js                # Contact data entry form
│   ├── ContactList.js                # Contact card list
│   └── index.js                      # React application entry point
├── .editorconfig
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── ROADMAP.md
├── SECURITY.md
└── SUPPORT.md
```

The actual repository also tracks a large `node_modules/` directory. It is omitted from this logical tree because it is generated dependency content, but it remains in Git. The new `.gitignore` does not untrack existing files.

## Runtime entry points
1. The browser loads `public/index.html`.
2. Create React App injects the compiled bundle.
3. `src/index.js` creates a React root at `#root`.
4. `App` renders the context provider, form, and list.

## State and build
The contacts array lives in `ContactContext.js`; there is no storage adapter, API client, database schema, or migration system. CRA writes production assets to `build/`.
