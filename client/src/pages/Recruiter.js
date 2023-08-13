import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { loginEmployer } from "../redux/actions/employerAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import img from "../assets/abs.png";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Recruiter() {
  const dispatch = useDispatch();
  function login(values) {
    dispatch(loginEmployer(values));
  }
  return (
    <div className="login">
      <Row justify="center" className="flex align-items-center">
        {/* <Col lg={5}>
          <h1 className="heading1" data-aos="slide-left">
            ABS
          </h1>
        </Col> */}
        <Col lg={10} sm={24} className="bs p-5 login-form">
          <h3 style={{ textAlign: "center" }}>
            <b>Recruiter Login page</b>
          </h3>
          <img className="logoimg" src={img}></img>
          <Link
            to="/employersignup"
            style={{ float: "right", marginTop: "-50px" }}
          >
            Become a Recruiter
          </Link>

          <hr />
          <Form layout="vertical" onFinish={login}>
            <Form.Item
              label="username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Button htmlType="submit" className="mb-3">
              Login as Recruiter
            </Button>
            <br />

            <Link to="/login" className="mt-3">
              Not registerd ? , Click here to register as user
            </Link>
            <Link to="/admin" style={{ float: "right" }}>
              Login as Admin
            </Link>
          </Form>
        </Col>
        {/* <Col lg={5}>
          <h1 className="heading2" data-aos="slide-right">
            Jobs
          </h1>
        </Col> */}
      </Row>
    </div>
  );
}

export default Recruiter;
