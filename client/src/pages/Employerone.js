import { Card, Col, Row } from "antd";
import React from "react";
import EmployerDashboard from "./EmployerDashboard";

const App = () => (
  <EmployerDashboard>
    <div class="row">
      <div class="col-sm-4">
        <div class="card" style={{ backgroundColor: "pink" }}>
          <div class="card-body">
            <h1 class="card-title text-center">
              <b style={{ color: "blue" }}>Posted Job</b>
            </h1>
            <p class="card-text  text-center">
              <h1>
                <b>9</b>
              </h1>
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style={{ backgroundColor: "pink" }}>
          <div class="card-body">
            <h1 class="card-title text-center">
              {" "}
              <b style={{ color: "blue" }}>Applied Candidates</b>
            </h1>
            <p class="card-text  text-center">
              <h1>
                <b>5</b>
              </h1>
            </p>
            {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style={{ backgroundColor: "pink" }}>
          <div class="card-body">
            <h1 class="card-title text-center">
              <b style={{ color: "blue" }}>Total User</b>
            </h1>
            <p class="card-text  text-center">
              <h1>
                <b>1250</b>
              </h1>
            </p>
            {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </EmployerDashboard>
);
export default App;
