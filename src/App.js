import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadCountries, selectCountries } from "./redux/countriesReducer";

import logo from './logo.svg';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);

  useEffect(() => {
    dispatch(loadCountries());
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {countries.length}
        </a>
      </header>
    </div>
  );
}

export default App;
