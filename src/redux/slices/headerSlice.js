import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
};

export const headerSlice = createSlice({
  name: 'isHeaderOipen',
  initialState,
  reducers: {
    headerToggle: (state) => {
      state.status = !state.status;
    },
    headerClose: (state) => {
      state.status = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { headerToggle, headerClose } = headerSlice.actions;

export default headerSlice.reducer;
