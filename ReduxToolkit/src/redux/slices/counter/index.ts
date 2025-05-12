import { createSlice } from "@reduxjs/toolkit";

export const couterSlice = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    // here was state means directyly conneted to initial state type like this Number if num there id word there they show String type.
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = couterSlice.actions;
export default couterSlice.reducer;
