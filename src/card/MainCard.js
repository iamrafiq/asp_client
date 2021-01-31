import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectInputText,
  setPickedCountries,
  selectPickedCountries,
} from "../redux/activityReducer";
import { selectCountries } from "../redux/countriesReducer";
import AhoCorasick from "../core/AhoCorasick";
import Modal from "../widget/modal/modal";
const MainCard = () => {
  const [modalState, setModalState] = useState(false);
  const dispatch = useDispatch();
  let ac = new AhoCorasick(useSelector(selectCountries));
  const inputText = useSelector(selectInputText);
  const pickedCountries = useSelector(selectPickedCountries);

  const toggleState = (e) => setModalState(!modalState);

  const clickSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(setPickedCountries({ pickedCountries: ac.search(inputText) }));
  }, [inputText]);

  const form = () => (
    <form onSubmit={clickSubmit}>
      <div class="card">
        <div class="card-header">Countries:</div>
        <div class="card-body">
          <p class="card-text">{inputText}</p>
          <div className="row">
            {pickedCountries &&
              pickedCountries.map((item, index) => (
                <h3 key={index} class="m-1">
                  <span class="badge badge-pill badge-dark">{item}</span>
                </h3>
              ))}
            <h3 class="m-1" onClick={(e) => toggleState(e)}>
              <span class="badge badge-pill badge-primary">+ Add</span>
            </h3>
          </div>
          <div className="row">
            <button className="btn btn-outline-primary">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );

  return (
    <div>
      {modalState && (
        <Modal title="Select countries:" id="modal" isOpen={modalState} onClose={toggleState}>
          <div className="box-body">I am the content of the modal</div>
        </Modal>
      )}
      <div className="row">
        <div className="col-md-6 offset-md-3">{form()}</div>
      </div>
    </div>
  );
};

export default MainCard;
