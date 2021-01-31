import React, { useState } from "react";
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
  let pickedCountries = [...useSelector(selectPickedCountries)];
  const [values, setValues] = useState({
    prevState: [],
  });
  let { prevState } = values;

  const handleChange = (options) => {
    if (options.length === 0) {
      prevState.map((item, index) => {
        let i = pickedCountries.indexOf(item.value);
        if (i !== -1) {
          pickedCountries.splice(i, 1);
        }
      });
      dispatch(setPickedCountries({ pickedCountries }));
    } else {
      if (prevState.length > options.length) {
        let notMatchedElements = prevState.filter(
          (element) => !options.includes(element)
        );
        notMatchedElements.map((item, index) => {
          let i = pickedCountries.indexOf(item.value);
          if (i !== -1) {
            pickedCountries.splice(i, 1);
          }
        });
        dispatch(setPickedCountries({ pickedCountries }));
      } else {
        let notMatchedElements = options.filter(
          (element) => !prevState.includes(element)
        );
        notMatchedElements.map((item, index) =>
          pickedCountries.push(item.value)
        );
        dispatch(setPickedCountries({ pickedCountries }));
      }
      setValues({ ...values, prevState: options });
    }
  };
  const formatOptionLabel = ({ value, label }) => (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>{label}</div>
      <div>+</div>
    </div>
  );
  return (
    <Select
      onChange={handleChange}
      formatOptionLabel={formatOptionLabel}
      closeMenuOnSelect={false}
      isMulti
      //   defaultValue={pickedCountries.map((item, index) => {
      //     return {
      //       value: item,
      //       label: item,
      //     };
      //   })}
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
