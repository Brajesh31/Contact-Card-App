# 🧠 Architecture decision log

No formally accepted Architecture Decision Records were present in the inspected source. Use the [ADR template](templates/adr-template.md) for future decisions.

## Current recorded architectural facts
- React Context is the shared contact state mechanism.
- Contacts are held in memory, without persistence.
- The application is a single view without a router.
- CRA/react-scripts supplies build and development commands.

These are implementation observations, not claims that alternatives were formally evaluated.
