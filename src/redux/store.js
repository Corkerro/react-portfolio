import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './slices/headerSlice';
import languageSlice from './slices/languageSlice';

export const store = configureStore({
  reducer: {
    headerStatus: headerSlice,
    language: languageSlice,
  },
});
