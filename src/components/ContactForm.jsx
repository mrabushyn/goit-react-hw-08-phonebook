import { useState } from 'react';
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function ContactForm({ formSubmitHandler }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    formSubmitHandler({ name, number });
    evt.currentTarget.reset();
  };

  let loginInputId = nanoid();

  return (
    <div className={css.formContainer}>
      <form action="" 
      className={css.formField} 
      onSubmit={handleSubmit}>
        <label htmlFor={loginInputId} className={css.labelField}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={loginInputId}
          className={css.inputField}
          onChange={handleChange}
        />
        <label htmlFor={loginInputId} className={css.labelField}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={loginInputId}
          className={css.inputField}
          onChange={handleChange}
        />
        <button type="submit" className={css.btnStyle}>
          Add contact
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  formSubmitHandler: PropTypes.func.isRequired,
};

