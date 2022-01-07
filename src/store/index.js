import { configureStore } from "@reduxjs/toolkit";

import statusSlice from "./status-slice";
import modeSlice from "./mode-slise";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    status: statusSlice.reducer,
    mode: modeSlice.reducer,
  },
});

export default store;
