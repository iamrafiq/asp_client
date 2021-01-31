import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  selectInputText,
  setPickedCountries,
  selectPickedCountries,
} from "../redux/activityReducer";
import { selectCountries } from "../redux/countriesReducer";
import AhoCorasick from "../core/AhoCorasick";
import Modal from "../widget/modal/modal";
import CountriesCard from "./CountriesCard";
import { postActivity } from "../core/apiCore";
const MainCard = () => {
  const history = useHistory();
  const [modalState, setModalState] = useState(false);
  const dispatch = useDispatch();
  let ac = new AhoCorasick(useSelector(selectCountries));
  const inputText = useSelector(selectInputText);
  const pickedCountries = useSelector(selectPickedCountries);

  const toggleState = (e) => setModalState(!modalState);

  const clickSubmit = (e) => {
    e.preventDefault();
    postActivity({
      text: inputText,
      countries: pickedCountries,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        // history.push("/activity/");
      }
    });
  };

  useEffect(() => {
    dispatch(
      setPickedCountries({ pickedCountries: [...ac.search(inputText)] })
    );
  }, [inputText]);

  const form = () => (
    <form onSubmit={clickSubmit}>
      <div class="card">
        <div class="card-header">Countries:</div>
        <div class="card-body">
          <div class="p-3" style={{ overflowY: "auto", maxHeight: "650px" }}>
            <div className="row">
              <p class="card-text">{inputText}</p>
            </div>

            <div className="row">
              {pickedCountries &&
                pickedCountries.map((item, index) => (
                  <h3 key={index} class="mt-1 pr-1">
                    <span class="badge badge-pill badge-dark">{item}</span>
                  </h3>
                ))}
              <h3
                style={{ cursor: "pointer" }}
                onClick={(e) => toggleState(e)}
                class="mt-1"
              >
                <span class="badge badge-pill badge-primary ">+ add tag</span>
              </h3>
            </div>
          </div>
          <div class="border border-light p-2 mb-4">
            <div class="text-center">
              <button
                type="button"
                class="btn btn-primary"
                onClick={(e) => clickSubmit(e)}
              >
                Submit Activity
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );

  return (
    <div>
      {modalState && (
        <Modal
          title="Select countries:"
          id="modal"
          isOpen={modalState}
          onClose={toggleState}
          modalSize={"sg"}
        >
          <CountriesCard></CountriesCard>
        </Modal>
      )}
      <div className="row">
        <div className="col-md-6 offset-md-3">{form()}</div>
      </div>
    </div>
  );
};

export default MainCard;
