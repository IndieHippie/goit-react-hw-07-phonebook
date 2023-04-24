import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import ContactForm from './ContactForn/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppStyled } from './App.module';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <AppStyled>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts</h3>
      <Filter />
      <ContactList/>
    </AppStyled>
  );
}

export default App;
