// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';
// import { contactReducer, filterContactReduser } from './reducer';
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

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
// reducer - функція із логікою зміни стану Redux. Обов'язковий параметр.
// preloadedState - початковий стан програми. Це має бути об'єкт тієї ж форми, що й, як мінімум, частина стану. Необов'язковий параметр.
// enhancer - функція розширення можливостей стору. Необов'язковий параметр.
