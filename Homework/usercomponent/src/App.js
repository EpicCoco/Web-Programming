import React from 'react';
import { useState } from 'react';
import User from './components/User';
import AddUser from './components/AddUser';
import Hdr from './components/Hdr';
import UsersList from './components/UsersList';

function App() {

  const DUMMY_USERS = [
    {
      id: 'e1',
      name: 'Toilet Paper',
      age: 23,
      img: 'https://picsum.photos/200',
      major: 'Computer Science',
    }
  ];
  const[allUsers, setUsers] = useState([DUMMY_USERS]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return[user, ...prevUsers];
    });
  };

  return (
    <div>
      <Hdr />
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={allUsers}/>
    </div>
  );
}

export default App;
