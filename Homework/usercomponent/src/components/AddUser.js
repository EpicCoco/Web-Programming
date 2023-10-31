import React from 'react';

import Card from './Card';
import Button from './Button';
import './AddUser.css';

const AddUser = () => {

  //add handlers
  //like in lifting state 
  
  return (
    <Card className="input">
      <form>
        <label>Username</label>
        <input
          id="username"
          type="text"
        />
        <label>Age (Years)</label>
        <input
          id="age"
          type="number"
        />
        <label>Link to image</label>
         <input
          id="img"
          type="text"
        />
        <label>Major</label>
         <input
          id="major"
          type="text"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
