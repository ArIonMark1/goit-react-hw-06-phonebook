import { createSlice, nanoid } from '@reduxjs/toolkit';

const initContactState = [
  { id: nanoid(5), name: 'Andrey Datsenko', number: '753-25-91' },
  { id: nanoid(5), name: 'Marko Pollo', number: '456-56-32' },
  { id: nanoid(5), name: 'Miki Maus', number: '162-63-32' },
]; // стейт це об'єкт, дааний кусок стейту буде записаний як значення ключа "contacts" у головному стейті

const contactSlice = createSlice({
  // приймає параметри налаштувань, створює і повертає типи екшенів, генератори екшенів та редюсер.
  name: 'contacts',
  initialState: initContactState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
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

//  Екшени
export const { addContact, deleteContact } = contactSlice.actions;
// редюсер слайсу
export const contactSliceReducer = contactSlice.reducer;

// ----------------------------------------------------------------
