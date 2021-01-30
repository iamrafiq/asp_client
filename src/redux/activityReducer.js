import { createSlice } from "@reduxjs/toolkit";

export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    inputText: "",
    pickedCountries:[],
  },
  reducers: {
    setInputText: (state, action) => {
      state.inputText = action.payload.inputText;
    },
    setPickedCountries: (state, action) => {
      state.pickedCountries = action.payload.pickedCountries;
    },
  },
});

export const {
    setInputText,
    setPickedCountries,

} = activitySlice.actions;


export const selectInputText = (state) => state.activity.inputText;
export const selectPickedCountries = (state) => state.activity.pickedCountries;

export default activitySlice.reducer;
