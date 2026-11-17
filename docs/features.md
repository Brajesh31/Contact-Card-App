# ✨ Features and limitations

| Feature | Status | Evidence in source |
|---|---|---|
| Contact entry | Implemented | `ContactForm.js` controls name, phone, email |
| Required fields | Implemented | Native `required` attributes |
| Add to shared state | Implemented | `ContactContext.js` exposes `addContact` |
| Contact cards | Implemented | `ContactList.js` maps contacts |
| Initial avatar | Implemented | First character of contact name |
| Responsive CSS | Partially implemented | Media queries at 600px |
| Call action | Presentation only | Button has no click handler |
| Message action | Presentation only | Button has no click handler |
| Video action | Presentation only | Button has no click handler |
| Edit/delete | Not implemented | No corresponding handlers |
| Search/filter | Not implemented | No corresponding UI/state |
| Persistence | Not implemented | Contacts exist only in React state |
| API/database | Not implemented | No server or database code inspected |
| Authentication | Not implemented | No auth flow present |

## User-visible constraints
- Empty fields are blocked by browser required-field validation.
- Data is not retained after reload.
- The list uses array indexes as keys.
- The form currently does not provide custom success/error messaging.
