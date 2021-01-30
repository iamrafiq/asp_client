import React, { useState } from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";
const InsertInput = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const clickSubmit = (e) => {
    e.preventDefault();
  };


  const newInputForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label htmlFor="" className="text-muted">
          Write your text
        </label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          autoFocus
          required
        />
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {newInputForm()}
        </div>
      </div>
    </Layout>
  );
};

export default InsertInput;
