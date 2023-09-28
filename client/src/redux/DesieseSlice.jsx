import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "this is redux",
  images: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    printingValue: (state, action) => {
      state.value = action.payload;
    },
    setAllImages: (state, action) => {
      state.images.push(action.payload);
    },
  },
});

export const { printingValue, setAllImages } = authSlice.actions;
export default authSlice.reducer;
