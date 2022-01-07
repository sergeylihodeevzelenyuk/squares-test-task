import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: {
    marks: [],
  },
  reducers: {
    addMark(state, action) {
      const newMark = action.payload;
      const existingMark = state.marks.find((mark) => mark.id === newMark.id);

      if (!existingMark) {
        state.marks.push(newMark);
      }
    },

    removeMark(state, action) {
      const id = action.payload.id;

      state.marks = state.marks.filter((mark) => mark.id !== id);
    },

    resetMarks(state) {
      state.marks = [];
    },
  },
});

export const statusActions = statusSlice.actions;

export default statusSlice;
