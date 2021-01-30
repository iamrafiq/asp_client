import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadCountries, selectCountries } from "../redux/countriesReducer";
import Layout from "./Layout";
function Home() {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);

  useEffect(() => {
    dispatch(loadCountries());
  }, []);
  return (
    <Layout className="container-fluid">
      {countries ? (
        countries.length > 1 ? (
          <span>countries loaded</span>
        ) : (
        <span>Something went worng, please try again! {countries.error}</span>
        )
      ) : (
        <span>Loading....please wait!</span>
      )}
    </Layout>
  );
}

export default Home;
