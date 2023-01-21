import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";
import "./UserApp.css";

function UserApp() {
  const [usersList, setUsersList] = useState([]);

  const addUserhandler = (inputUser) => {
    inputUser.key = Math.random().toString();
    setUsersList((prevUsersList) => {
      return [...prevUsersList, inputUser];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserhandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default UserApp;
