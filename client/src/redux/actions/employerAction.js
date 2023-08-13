import axios from "axios";
import { message } from "antd";
export const registerEmployer = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("/api/employer/register", values);
    message.success("User Registered Successfully");
    setTimeout(() => {
      window.location.href = "/recruiter";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("something went wrong , please try later");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const loginEmployer = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const user = await axios.post("/api/employer/login", values);
    message.success("Login success");
    localStorage.setItem("user", JSON.stringify(user.data));
    setTimeout(() => {
      window.location.href = "/employer";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("invalid credentials");
    dispatch({ type: "LOADING", payload: false });
  }
};

// export const updateUser = (values) => async (dispatch) => {
//   const userid = JSON.parse(localStorage.getItem("user"))._id;

//   values._id = userid;

//   dispatch({ type: "LOADING", payload: true });

//   try {
//     const user = await axios.post("/api/users/update", values);
//     message.success("User updated successfully");
//     localStorage.setItem("user", JSON.stringify(user.data));
//     setTimeout(() => {
//       window.location.reload();
//     }, 1000);
//     dispatch({ type: "LOADING", payload: false });
//   } catch (error) {
//     message.error("something went wrong , please try later");
//     dispatch({ type: "LOADING", payload: false });
//   }
// };

export const getAllemployer = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/employer/getallemployers");
    dispatch({ type: "GET_ALL_USERS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
