import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loadingIsvisible: false,
    notification: null,
  },
  reducers: {
    toggle(state) {
      state.loadingIsvisible = !state.loadingIsvisible;
    },
    showNotification(state, action) {
      state.notification = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
