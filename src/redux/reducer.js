// import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const LOCAL_KEY = 'contacts';

const initContactState = [
  //   { id: nanoid(5), name: 'Andrey Datsenko', number: '753-25-91' },
  //   { id: nanoid(5), name: 'Marko Pollo', number: '456-56-32' },
  //     { id: nanoid(5), name: 'Miki Maus', number: '162-63-32' },
];
const filterContactState = {};

const filterContactReduser = (state = filterContactState, action) => {
  switch (action.type) {
    case 'contacts/findCoincidences':
      return { ...state, payload: action.payload };
    default:
      return null;
  }
};
const contactReducer = (state = initContactState, action) => {
  switch (action.type) {
    //----------------------------------------------------------------
    case 'contacts/addContact':
      const isDublicate = controlDublicate(state, action);
      if (isDublicate) {
        refuseAddContact(action);
        return state;
      }
      return onSaveStorage(addContact(state, action));
    //----------------------------------------------------------------
    case 'contacts/deleteContact':
      const newState = state.filter(contact => contact.id !== action.payload);
      return onSaveStorage(newState);
    //----------------------------------------------------------------
    default:
      return onLoadStorage(state);
  }
};

// #################################################################
export const rootReducer = (state = {}, action) => {
  return {
    contacts: contactReducer(state.contacts, action),
    filters: filterContactReduser(state.filters, action),
  };
};
// #################################################################
// --------------- Contact Reducer function blocks ---------------

function controlDublicate(state, action) {
  return state.find(
    contact =>
      contact.name === action.payload.name &&
      contact.number === action.payload.number
  );
}
function addContact(state, action) {
  toast.success(`${action.payload.name} added to contacts.`);
  return [...state, action.payload];
}
function refuseAddContact(action) {
  toast.error(`${action.payload.name} into contacts already.`);
}
function onLoadStorage(state) {
  const dataStorage = localStorage.getItem(LOCAL_KEY);
  const parsedDataStorage = JSON.parse(dataStorage);

  if (parsedDataStorage && parsedDataStorage.length > 0) {
    // додаткова перевірка, як що користувач видалив записи лишається пустий масив але [] === true !!
    return parsedDataStorage;
  }
  return state;
}
function onSaveStorage(state) {
  const stringState = JSON.stringify(state);
  localStorage.setItem(LOCAL_KEY, stringState);
  return state;
}
// ----------------------------------------------------------------
