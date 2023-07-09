import { createSlice } from '@reduxjs/toolkit';

const filterContactState = { payload: null };

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterContactState,
  reducers: {
    filterContacts(state, action) {
      return { ...state, payload: action.payload };
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterContactReduser = filterSlice.reducer;
