import React, { useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../redux/actions/userActions";
import { getAllemployer } from "../redux/actions/employerAction";
import { Table } from "antd";
import moment from "moment";
import Adminview from "./Adminview";
function AllUsers() {
  const { employers } = useSelector((state) => state.employerReducer);
  // const { users } = useSelector((state) => state.usersReducer);
  console.log(employers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllemployer());
  }, []);

  return (
    <div>
      <h1>All the verified user details </h1>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Ser.No</th>
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">MobileNumber</th>
          </tr>
        </thead>
        {employers.map((user) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{user.length}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.mobileNumber}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default AllUsers;
