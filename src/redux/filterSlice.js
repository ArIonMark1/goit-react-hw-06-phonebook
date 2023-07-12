import { createSlice } from '@reduxjs/toolkit';

const filterContactState = '';

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterContactState,
  reducers: {
    filterContacts(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterContactReduser = filterSlice.reducer;
