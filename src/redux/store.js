import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { rootReducer } from './reducer';

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

// reducer - функція із логікою зміни стану Redux. Обов'язковий параметр.
// preloadedState - початковий стан програми. Це має бути об'єкт тієї ж форми, що й, як мінімум, частина стану. Необов'язковий параметр.
// enhancer - функція розширення можливостей стору. Необов'язковий параметр.
