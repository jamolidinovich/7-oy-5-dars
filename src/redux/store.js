// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Assuming you have a user slice
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
