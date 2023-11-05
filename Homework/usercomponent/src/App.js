import React from 'react';
import { useState } from 'react';
import AddUser from './components/AddUser';
import Hdr from './components/Hdr';
import UsersList from './components/UsersList';

function App() {

  /* dummy users if needed for use state
  const DUMMY_USERS = [
    {
      id: 'e1',
      name: 'Toilet Paper',
      age: 23,
      img: 'https://picsum.photos/200',
      major: 'Computer Science',
    }
  ];
  */

  //starts the list out as empty
  const[allUsers, setUsers] = useState([]);

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
