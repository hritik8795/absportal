import React, { useState } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { loginUser } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import img from "../assets/abs.png";
import ReCAPTCHA from "react-google-recaptcha";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Login() {
  const dispatch = useDispatch();
  function login(values) {
    dispatch(loginUser(values));
  }
  function onChange(value) {
    console.log("Captcha value:", value);

    // values ? loginUser(values) : "please fill the recapta";
  }
  return (
    <div className="login">
      <h1 className="align-items-center"></h1>
      <Row justify="center" className="flex align-items-center">
        <Col lg={15} sm={24} className="bs p-5 login-form">
          <h3 style={{ textAlign: "center" }}>
            <b>Login</b>
          </h3>
          <img className="logoimg" src={img}></img>
          <Link to="/recruiter" style={{ float: "right", marginTop: "-50px" }}>
            Recruiter Login
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
            <ReCAPTCHA
              sitekey="6LfHo18nAAAAABWlIWW1Wrf6Lp3mzQdthUcuTscD"
              onChange={onChange}
              rules={[{ required: true }]}
            />
            ,
            <Button htmlType="submit" className="mb-3">
              Login
            </Button>
            <br />
            <Link to="/register" className="mt-3">
              Not registerd ? , Click here to register
            </Link>
            <Link to="/admin" style={{ float: "right" }}>
              Login as Admin
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
