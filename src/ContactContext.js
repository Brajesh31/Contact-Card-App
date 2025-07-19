import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts(prev => [...prev, contact]);
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact }}>
      {children}
    </ContactContext.Provider>
  );
};
