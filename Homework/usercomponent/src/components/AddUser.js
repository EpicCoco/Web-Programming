import React from 'react';
import { useState } from 'react';

import Card from './Card';
import Button from './Button';
import './AddUser.css';

const AddUser = (props) => {

  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userImage, setUserImage] = useState('');
  const [userMajor, setUserMajor] = useState('');

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };
  const userImageChangeHandler = (event) => {
    setUserImage(event.target.value);
  };
  const userMajorChangeHandler = (event) => {
    setUserMajor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!userName) return; //don't allow empty userName

    const userData = {
      name: userName,
      age: userAge,
      img: userImage,
      major: userMajor,
    };
    
    props.onAddUser(userData);
    console.log(userData);

    setUserName('');
    setUserAge('');
    setUserImage('');
    setUserMajor('');
  };

  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={userNameChangeHandler}
        />
        <label>Age (Years)</label>
        <input
          id="age"
          type="number"
          value={userAge}
          onChange={userAgeChangeHandler}
        />
        <label>Link to image</label>
         <input
          id="img"
          type="text"
          value={userImage}
          onChange={userImageChangeHandler}
        />
        <label>Major</label>
         <input
          id="major"
          type="text"
          value={userMajor}
          onChange={userMajorChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
