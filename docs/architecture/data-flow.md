# 🔄 Data flow

```mermaid
flowchart TD
  A[User enters name, phone, email] --> B[Controlled component state]
  B --> C[Form submit event]
  C --> D{All values present?}
  D -->|No| E[Browser required-field validation]
  D -->|Yes| F[addContact object]
  F --> G[ContactProvider appends to contacts array]
  G --> H[Context consumers rerender]
  H --> I[ContactList maps entries]
  I --> J[Contact card shown]
  F --> K[Form fields reset]
```

The form performs a truthiness check for all three values and relies on native required validation. No data leaves the React component tree in the inspected code. A refresh resets the collection.
