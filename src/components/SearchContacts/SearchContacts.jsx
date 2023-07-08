import React from 'react';
import './SearchContacts.scss';
// import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { findContact } from 'redux/actions';

export default function SearchContacts() {
  // пише дані в стейт при будь-якій зміні передає значення для обробки
  // ********************************
  const dispatch = useDispatch();

  function handleFilterData(evt) {
    const filterData = evt.target.value.toLowerCase();
    dispatch(findContact(filterData.trim()));
  }
  // ********************************

  return (
    <label>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        className="nameField"
        onChange={handleFilterData}
        placeholder="Filter contacts..."
      ></input>
    </label>
  );
}
