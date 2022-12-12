import { useSelector, useDispatch } from 'react-redux';
import css from './Phonebook.module.css';

import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contactOperations';
import { selectContacts, selectFilter } from 'redux/selectors';
// import {ContactsApi} from 'components/ContactsQuery'

export default function ContactList () {
// console.log('data', data);

  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
console.log('items', items);
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error && <b>Request in progress...</b>}
      {filteredContacts.length > 0 &&
        filteredContacts.map(contact => (
          <li key={contact.id} className={css.contactList}>
            {contact.name}: {contact.number}
            <button
              type="onClick"
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
              className={css.delBtnStyle}
            >
              Delete
            </button>
          </li>
        ))}

      {error && <p>{error}</p>}

      {/* <div>{data}</div> */}
    </ul>
  );
}
