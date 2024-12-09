import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setValues: (state, action) => {
      state.value = action.payload;
    },
    getValueById: (state, action) => {
      const { id } = action.payload;
      const value = state.value.find((item) => item.id === id);
      return value;
    },
  },
});

export const { setValues, getValueById } = testSlice.actions;
export default testSlice.reducer;
