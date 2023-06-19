import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
};

export const languageSlice = createSlice({
  name: 'setLanguage',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
