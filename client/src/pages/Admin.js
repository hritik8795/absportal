import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
// import { loginAdmin } from "../redux/actions/adminAction";
import { loginAdmin } from "../redux/actions/adminActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import img from "../assets/abs.png";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Login() {
  const dispatch = useDispatch();
  function admin(values) {
    dispatch(loginAdmin(values));
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
            <b>Login as admin</b>
          </h3>

          <img className="logoimg" src={img}></img>

          <Link to="/recruiter" style={{ float: "right", marginTop: "-50px" }}>
            Login a Recruiter
          </Link>
          <hr />
          <Form layout="vertical" onFinish={admin}>
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
              Login as Admin
            </Button>
            <br />

            <Link to="/register" className="mt-3">
              Not registerd ? , Click here to register
            </Link>
            <Link to="/login" style={{ float: "right" }}>
              USerLogin
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

export default Login;
