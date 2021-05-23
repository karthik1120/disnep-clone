import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSelect = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.photo = null;
      state.email = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSelect.actions;

export const userName = (state) => state.user.name;
export const userEmail = (state) => state.user.email;
export const userPhoto = (state) => state.user.photo;

export default userSelect.reducer;
