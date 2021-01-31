import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadCountries, selectCountries } from "../redux/countriesReducer";
import Layout from "../core/Layout";
import InputCard from "../card/InputCard";
import MainCard from "../card/MainCard";
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
          <React.Fragment>
            <InputCard></InputCard>
            <MainCard></MainCard>
          </React.Fragment>
        ) : (
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2 mt-5>
                <span className="text-warning">
                  Countries not found, please try again! {countries.error}
                </span>
              </h2>
            </div>
          </div>
        )
      ) : (
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <span>
              <span className="text-muted">Loading....please wait!</span>
            </span>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Home;
