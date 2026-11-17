# 📊 Project risk register

| Risk | Impact | Current mitigation / next action |
|---|---|---|
| Contact data lost on refresh | High for real address-book use | Clearly disclose in-memory-only behavior; decide on persistence |
| Contact action buttons are non-functional | Medium | Wire actions or relabel/remove after product decision |
| No application tests | Medium | Add tests for context, form, and list |
| No visible input labels | Medium | Add associated labels and accessibility checks |
| Tracked `node_modules/` | High repository maintenance cost | Review a separate untracking change; preserve current files during this documentation pass |
| No backend/authentication | Context-dependent | Keep scope explicit; do not imply multi-user privacy guarantees |

Review this table when implementation or product scope changes.
