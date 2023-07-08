import { nanoid } from 'nanoid';

// ----------------------------------------------------------------
export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: { id: nanoid(5), name, number },
  };
};

// ----------------------------------------------------------------
export const deleteContact = id => {
  return { type: 'contacts/deleteContact', payload: id };
};

// ----------------------------------------------------------------
export const findContact = content => {
  return { type: 'contacts/findCoincidences', payload: content };
};
