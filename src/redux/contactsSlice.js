import { createSlice, nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
/*

*/
const initContactState = [
  { id: nanoid(5), name: 'Andrey Datsenko', number: '753-25-91' },
  { id: nanoid(5), name: 'Marko Pollo', number: '456-56-32' },
  { id: nanoid(5), name: 'Miki Maus', number: '162-63-32' },
];

const contactSlice = createSlice({
  // приймає параметри налаштувань, створює і повертає типи екшенів, генератори екшенів та редюсер.
  name: 'contacts',
  initialState: initContactState,
  reducers: {
    addContact: {
      reducer(state, action) {
        toast.success(`${action.payload.name} added to contacts.`);
        return { ...state, contacts: [...state.contacts, action.payload] }; /// !!!!!!AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      },
      prepare(name, number) {
        return { payload: { id: nanoid(5), name, number } };
      },
    },
    deleteContact(state, action) {
      const indexElement = state.findIndex(
        contact => contact.id === action.payload
      );
      state.splice(indexElement, 1);
    },
  },
});
console.log('contactSlice: ', contactSlice);
//  Екшени
export const { addContact, deleteContact } = contactSlice.actions;
// редюсер слайсу
export const contactSliceReducer = contactSlice.reducer;

// ----------------------------------------------------------------
// --------------- Contact Reducer function blocks ---------------

function controlDublicate(state, action) {
  return state.find(
    contact =>
      contact.name === action.payload.name &&
      contact.number === action.payload.number
  );
}
function appendContact(state, action) {
  toast.success(`${action.payload.name} added to contacts.`);
  state.push(action.payload);
  return state;
}
function refuseAddContact(action, state) {
  toast.error(`${action.payload.name} already in contacts.`);
  return state;
}

// ----------------------------------------------------------------
