import { createSlice } from "@reduxjs/toolkit";

const toModifyData = (obj) => {
  const arrOfModes = [];

  for (let key in obj) {
    const mode = { modeName: key, field: obj[key].field, isChecked: false };

    arrOfModes.push(mode);
  }

  arrOfModes[0].isChecked = true;

  return arrOfModes;
};

const toChangeCheckedMode = (modes, name) => {
  return modes.map((mode) =>
    mode.modeName === name
      ? { ...mode, isChecked: true }
      : { ...mode, isChecked: false }
  );
};

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    modes: [],
    isModeChanged: false,
    field: null,
  },
  reducers: {
    setModes(state, action) {
      const modes = toModifyData(action.payload);

      state.modes = state.modes.concat(modes);
    },
    updateModes(state, action) {
      state.modes = toChangeCheckedMode(state.modes, action.payload);
    },
    setInitialField(state) {
      state.field = state.modes[0].field;
    },

    setField(state, action) {
      state.field = action.payload;
    },
    toggleIsModeChanged(state, action) {
      state.isModeChanged = action.payload;
    },
  },
});

export const modeActions = modeSlice.actions;

export default modeSlice;
