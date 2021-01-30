import { createSlice } from "@reduxjs/toolkit";
import { getCountries } from "../core/apiCore";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    data: [],
  },
  reducers: {
    setCountries: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

const { setCountries } = countriesSlice.actions;

export const loadCountries = () => (dispatch) => {
  getCountries().then((data) => {
    dispatch(setCountries({ data }));
  });
};

export const selectCountries = (state) => {
  return state.countries.data;
};

export default countriesSlice.reducer;
