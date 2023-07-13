import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactSliceReducer } from './contactsSlice';
import { filterContactReduser } from './filterSlice';
// ----------------------------------------------------------------

const persistConfig = {
  key: 'allContacts',
  storage,
  blacklist: ['filters'],
};

// -----------------------------------
const rootReducer = combineReducers({
  // в об'єкт-стейт по ключу повертає результат редюсера... жесть
  contacts: contactSliceReducer,
  filters: filterContactReduser,
});
// -----------------------------------

const persistContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistContactsReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
}); // приймає єдиний аргумент - об'єкт параметрів
// функція з тулкіта configureStore під капотом налаштовує інструменти розробника, та інші корисні функції,
// такі як перевірка мутації стану в редюсерах чи використання невалідних значень.
// також може створити кореневий редюсер(передати властивості reducer  об'єкт тієї ж форми що в combineReducers).
export const persistor = persistStore(store);
