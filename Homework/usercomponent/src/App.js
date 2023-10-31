import React from 'react';
import User from './components/User';
import AddUser from './components/AddUser';
import Hdr from './components/Hdr';

function App() {
  return (
    <div>
      <Hdr />
      <AddUser />
      <User />
    </div>
  );
}

export default App;
