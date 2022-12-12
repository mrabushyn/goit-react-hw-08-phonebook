import React from 'react';
import { useDispatch } from 'react-redux';
import { filteredList } from 'redux/fetchContactsSlice';
import css from './Phonebook.module.css';

export default function Filter () {
    const dispatch = useDispatch();

    const changeFilter = evt => {
      dispatch(filteredList(evt.currentTarget.value));
    };

    return (
      <label className={css.labelField}>
        find contact by name:
        <input
          className={css.inputField}
          type="text"
          onChange={changeFilter}
        />
      </label>
    );
  };

