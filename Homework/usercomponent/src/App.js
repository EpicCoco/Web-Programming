import React from 'react';
import User from './components/User';
import AddUser from './components/AddUser';
import Hdr from './components/Hdr';
import UsersList from './components/UsersList';

function App() {
  return (
    <div>
      <Hdr />
      <AddUser />
      <UsersList users={allUsers}/>
    </div>
  );
}

export default App;
