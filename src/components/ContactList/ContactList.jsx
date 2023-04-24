import { Button, Container, List, ContactItem } from './ContactList.module';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  
    return (
      <Container>
        <List>
          {visibleContacts.map(({ name, number, id }) => (
            <ContactItem key={id}>
              {name}: {number}
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                delete
              </Button>
            </ContactItem>
          ))}
        </List>
      </Container>
    );
  };

export default ContactList;
