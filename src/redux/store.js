import { configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './contactsSlice';
import { filterContactReduser } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterContactReduser,
  },
}); // приймає єдиний аргумент - об'єкт параметрів
// функція з тулкіта configureStore під капотом налаштовує інструменти розробника, та інші корисні функції,
// такі як перевірка мутації стану в редюсерах чи використання невалідних значень.
// також може створити кореневий редюсер(передати властивості reducer  об'єкт тієї ж форми що в combineReducers).
