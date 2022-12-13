import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactOperations';
import { selectContacts } from 'redux/contacts/selectors';

import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';

export default function Phonebook() {
  const dispatch = useDispatch();

  const { items } = useSelector(selectContacts);
  const formSubmitHandler = ({ name, number }) => {
    const normalizedSameName = name.toLowerCase();

    const findSameEl = items.find(
      contact => contact.name.toLowerCase() === normalizedSameName
    );

    findSameEl
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({ name, number }));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm formSubmitHandler={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
