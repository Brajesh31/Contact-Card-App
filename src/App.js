import React from 'react';
import { ContactProvider } from './ContactContext';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './App.css';

function App() {
  return (
    <ContactProvider>
      <div className="container">
        <h1>Contact Card App</h1>
        <ContactForm />
        <ContactList />
      </div>
    </ContactProvider>
  );
}

export default App;
