import React from "react";
import { Row, Col, Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { registerEmployer } from "../redux/actions/employerAction";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../assets/abs.png";

// ..
AOS.init();
function RecruiterRegister() {
  const dispatch = useDispatch();
  function register(values) {
    if (values.password !== values.confirmpassword) {
      message.error("passwords not matched");
    } else {
      console.log(values);
      dispatch(registerEmployer(values));
    }
  }

  return (
    <div className="register">
      <Row justify="center" className="flex align-items-center">
        {/* <Col lg={5}>
          <h1 className="heading1" data-aos="slide-right">
            ABS
          </h1>
        </Col> */}
        <Col lg={10} sm={24} className="bs p-4 register-form">
          <h3 style={{ textAlign: "center" }}>
            <b>Register as Employer</b>
          </h3>
          <img className="logoimg" src={img}></img>
          <hr />
          <Form layout="vertical" onFinish={register}>
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
            <Form.Item
              label="confirm password"
              name="confirmpassword"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="company Name"
              name="companyName"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Button htmlType="submit" className="mb-3">
              Register as employer
            </Button>{" "}
            <br />
            <Link to="/recruiter" className="mt-3">
              Already Recruiter ? , Click here to login
            </Link>
            <Link to="/admin" style={{ float: "right" }}>
              Login as Admin
            </Link>
          </Form>
        </Col>
        {/* <Col lg={5}>
          <h1 className="heading2" data-aos="slide-left">
            Jobs
          </h1>
        </Col> */}
      </Row>
    </div>
  );
}

export default RecruiterRegister;
