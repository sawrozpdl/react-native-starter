import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  accessToken: null,
};

const meSlice = createSlice({
  name: "me",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    flush: () => initialState,
  },
});

export const { setUser, setAccessToken, flush } = meSlice.actions;

export default meSlice.reducer;
