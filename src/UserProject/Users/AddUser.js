import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

// Using Refs
function AddUser({ onAddUser }) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [input, setInput] = useState({
    username: "",
    age: "",
  });
  const [error, setError] = useState();

  // const updateInput = (pair) =>
  //   setInput((prevInput) => ({ ...prevInput, pair }));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const addUserHandler = (event) => {
    console.log(nameInputRef.current.value); // reading ref value
    event.preventDefault();
    if (input.username.trim().length === 0 || input.age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter Valid Input!",
      });
      return;
    }
    if (+input.age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter Valid Age!",
      });
      return;
    }
    setInput({
      username: "",
      age: "",
    });
    onAddUser(input);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            value={input.username}
            type="text"
            onChange={handleChange}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            name="age"
            id="age"
            type="number"
            value={input.age}
            onChange={handleChange}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
