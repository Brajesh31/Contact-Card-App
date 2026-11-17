# 🎛️ Interaction states

## Contact form
- Initial: all controlled values are empty.
- Editing: each input updates its local React state.
- Invalid: native browser constraints can block submission.
- Submitted: the context receives a contact object and the fields reset.

## Contact list
- Initial/empty: the list heading is rendered with no cards.
- Populated: each contact produces a card with an initial, name, action labels, phone, and email.
- Refresh: the provider initializes an empty array again.

No custom loading, saving, error, toast, or confirmation state is implemented.
