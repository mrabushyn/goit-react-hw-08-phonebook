import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactOperations';
import { selectContacts } from 'redux/selectors';
import { Helmet } from 'react-helmet';


import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
// import { Outlet } from 'react-router-dom';

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
      <Helmet>
        <h2>Phonebook</h2>
      </Helmet>
      <ContactForm formSubmitHandler={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
