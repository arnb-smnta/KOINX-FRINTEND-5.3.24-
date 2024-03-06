import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    coinPriceData: {},
    coinSpecifics: {},
  },
  reducers: {
    addCoinPriceData: (state, action) => {
      const { key, data } = action.payload;
      state.coinPriceData[key] = data;
    },
    addCoinData: (state, action) => {
      const { key, data } = action.payload;
      state.coinSpecifics[key] = data;
    },
  },
});

export const { addCoinPriceData, addCoinData } = dataSlice.actions;
export default dataSlice.reducer;
