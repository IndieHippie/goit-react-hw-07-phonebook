import { useEffect, useState } from 'react';
import { Form, Input, Button } from 'components/ContactForn/ContactForm.module';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk, getContactsThunk } from 'redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    const contact = {
      name: name,
      phone: number,
    };
    e.preventDefault();
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(addContactsThunk(contact));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const contacts = useSelector(state => state.contacts.items);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
        </label>
        <Input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>
          <span>Number</span>
        </label>
        <Input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
};

export default ContactForm;
