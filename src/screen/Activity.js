import React from "react";
import Layout from "../core/Layout";
import { useHistory } from "react-router-dom";

function Activity() {
  const history = useHistory();

  return (
    <Layout className="container-fluid">
      <div class="card text-center d-flex justify-content-center mt-5">
        <div class="card-body">
          <h5 class="card-title">Activity saved successfully.</h5>
          <div
            class="btn btn-primary"
            onClick={() => {
              history.push("/");
            }}
          >
            Go Back
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Activity;
