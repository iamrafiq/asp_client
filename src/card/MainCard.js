import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectInputText,
  setPickedCountries,
  selectPickedCountries,
} from "../redux/activityReducer";
import {selectCountries } from "../redux/countriesReducer";

import { findCountries } from "../core/countryFinder";
import AhoCorasick from "../core/AhoCorasick";
const MainCard = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const inputText = useSelector(selectInputText);
  const pickedCountries = useSelector(selectPickedCountries);
  var ac = new AhoCorasick(countries);
//   var results = ac.search('Canada find keyword1 at position 19 and keyword2 at position 47.');
  
  const clickSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(setPickedCountries({pickedCountries:ac.search(inputText)}));
  }, [inputText]);
  const submitForm = () => (
    <form onSubmit={clickSubmit}>
      <div class="card">
        <div class="card-header">Countries:</div>
        <div class="card-body">
          <p class="card-text">{inputText}</p>
          <p class="card-text">{pickedCountries}</p>

          <div className="row">
            {pickedCountries &&
              pickedCountries.map((item, index) => (
                <span class="badge badge-pill badge-dark">{item.name}</span>
              ))}
          </div>

          <div className="row">
            <button className="btn btn-outline-primary">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">{submitForm()}</div>
    </div>
  );
};

export default MainCard;
