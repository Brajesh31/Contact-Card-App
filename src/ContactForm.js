import React, { useState, useContext, useEffect } from 'react';
import { ContactContext } from './ContactContext';

const ContactForm = () => {
  const { addContact } = useContext(ContactContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && email) {
      addContact({ name, phone, email });
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  useEffect(() => {
    console.log("Form component mounted or updated.");
  }, []);

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
