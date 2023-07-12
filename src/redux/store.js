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
import { configureStore } from '@reduxjs/toolkit';

import { contactSliceReducer } from './contactsSlice';
import { filterContactReduser } from './filterSlice';

const persistConfig = { key: 'allContacts', storage };

const persistContactsReducer = persistReducer(
  persistConfig,
  contactSliceReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filters: filterContactReduser,
  },
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
