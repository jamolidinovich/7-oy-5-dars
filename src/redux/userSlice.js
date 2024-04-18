// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      //   console.log(11, action.payload);
      let copied = JSON.parse(JSON.stringify(state.value));
      copied.push(action.payload);
      state.value = copied;
      console.log(state.value);
    },
  },
});

export const { add } = userSlice.actions;
export default userSlice.reducer;
