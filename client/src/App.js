import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import Home from "./pages/Home";
import JobInfo from "./pages/JobInfo";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import AppliedJobs from "./pages/AppliedJobs";
import PostJob from "./pages/PostJob";
import Profile from "./pages/Profile";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "./redux/actions/jobActions.";
import { useEffect } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import PostedJobs from "./pages/PostedJobs";
import AllUsers from "./pages/AllUsers";
import EditJob from "./pages/EditJob";
import { getAllUsers } from "./redux/actions/userActions";
import UserInfo from "./pages/UserInfo";
import Adminview from "./pages/Adminview";
import Recruiter from "./pages/Recruiter";
import RecruiterRegister from "./pages/RecruiterRegister";
import EmployerDashboard from "./pages/EmployerDashboard";

import Employerone from "./pages/Employerone";
import Query from "./pages/Query";
import AllEmployers from "./pages/AllEmployers";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="App">
      {loader && (
        <div className="sweet-loading text-center">
          <FadeLoader color={"#001529"} />
        </div>
      )}

      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/register" exact component={Register} />
        <Route path="/adminview" exact component={Adminview} />
        <Route path="/recruiter" exact component={Recruiter} />
        <Route path="/employersignup" exact component={RecruiterRegister} />
        <ProtectedRoute path="/" exact component={Home} />
        <ProtectedRoute path="/appliedjobs" exact component={AppliedJobs} />
        <ProtectedRoute path="/postjob" exact component={PostJob} />
        <ProtectedRoute path="/employer" exact component={Employerone} />
        <ProtectedRoute path="/query" exact component={Query} />

        <ProtectedRoute
          path="/employerDashboard"
          exact
          component={EmployerDashboard}
        />
        <ProtectedRoute path="/AllEmployers" exact component={AllEmployers} />

        <ProtectedRoute path="/Allusers" exact component={AllUsers} />

        <ProtectedRoute path="/profile" exact component={Profile} />
        <ProtectedRoute path="/jobs/:id" exact component={JobInfo} />

        <ProtectedRoute path="/posted" exact component={PostedJobs} />

        <ProtectedRoute path="/editjob/:id" exact component={EditJob} />
        <ProtectedRoute path="/users/:id" exact component={UserInfo} />
        <ProtectedRoute
          path="/employerposted"
          exact
          component={EmployerDashboard}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  const user = localStorage.getItem("user");
  const admin = localStorage.getItem("admin");

  // if (user) {
  //   return <Route {...props} />;
  // } else if (admin) {
  //   return <Redirect to="/Adminview" />;
  // } else {
  //   // return <Route {...props} />;
  //   return <Redirect to="/login" />;
  // }
  if (!user && !admin) {
    return <Redirect to="/login" />;
  } else if (admin) {
    return <Redirect to="/adminview" />;
  } else {
    return <Route {...props} />;
  }
}
