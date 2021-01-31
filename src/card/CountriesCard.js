import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPickedCountries,
  selectPickedCountries,
} from "../redux/activityReducer";
import { selectCountries } from "../redux/countriesReducer";
import Select from "react-select";

const CountriesCard = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const pickedCountries = useSelector(selectPickedCountries);

  const handleChange = (options) => {
    console.log("options:", options);
    if (options != null) {
    } else {
    }
  };
  return (
    <Select
      onChange={handleChange}
      closeMenuOnSelect={false}
      isMulti
      defaultValue={pickedCountries.map((item, index) => {
        return {
          value: item,
          label: item,
        };
      })}
      options={countries.map((item, index) => {
        return {
          value: item,
          label: item,
        };
      })}
    />
  );
};

export default CountriesCard;
