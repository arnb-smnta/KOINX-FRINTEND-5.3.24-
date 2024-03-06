import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
const appstore = configureStore({
  reducer: {
    data: dataSlice,
  },
});
export default appstore;
