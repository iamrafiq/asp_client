import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectInputText, setInputText } from "../redux/activityReducer";
const InputCard = () => {
  const dispatch = useDispatch();
  const inputText = useSelector(selectInputText);
  const handleChange = (e) => {
    dispatch(
      setInputText({
        inputText: e.target.value,
      })
    );
  };

  const newInput = () => (
    <div class="card">
      <div class="card-header">Write your text:</div>
      <div class="card-body">
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={inputText}
          autoFocus
          required
        />
      </div>
    </div>
  );

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">{newInput()}</div>
    </div>
  );
};

export default InputCard;
