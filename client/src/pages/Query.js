import React, { useRef } from "react";
import EmployerDashboard from "./EmployerDashboard";

import emailjs from "@emailjs/browser";
const Query = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a15474a",
        "template_rim7yrp",
        form.current,
        "qI5vH_7piskERcvVN"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
          alert("message not sent");
        }
      );
  };

  return (
    <div>
      <EmployerDashboard>
        <form
          class="card shadow-lg p-3 mb-5 bg-white rounded p-3"
          ref={form}
          onSubmit={sendEmail}
        >
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              name="user_name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="user_email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Email"
            />
          </div>
          <label for="exampleInputEmail1">Subject</label>
          <input
            type="text"
            class="form-control"
            name="user_subject"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Mobile"
          />

          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Write your query in the box
            </label>
            <textarea
              class="form-control"
              name="message"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </EmployerDashboard>
    </div>
  );
};

export default Query;
