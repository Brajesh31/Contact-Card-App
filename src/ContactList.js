import React, { useContext } from 'react';
import { ContactContext } from './ContactContext';
import './ContactCard.css';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div>
      <h2>Saved Contacts</h2>
      {contacts.map((contact, index) => (
        <div className="contact-card-dark" key={index}>
          <div className="avatar-circle">
            {contact.name.charAt(0).toUpperCase()}
          </div>
          <h3>{contact.name}</h3>

          <div className="contact-buttons">
            <button>📞 Call</button>
            <button>💬 Message</button>
            <button>🎥 Video</button>
          </div>

          <div className="contact-info-box">
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Email:</strong> {contact.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
