import { configureStore } from "@reduxjs/toolkit";
import testSliceReducer from "./slice";

export const store = configureStore({
  reducer: {
    testSlice: testSliceReducer,
  },
});
