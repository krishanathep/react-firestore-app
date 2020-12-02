import React, { useState } from 'react';
import AddItem from './pages/AddItem';
import ItemList from './pages/ItemList';
import UpdateItem from './pages/UpdateItem';

function App() {
  return (
    <div className="App">
      <h1>Hooks Firestore CRUD App</h1>
      <ItemList/>
      <UpdateItem/>
      <AddItem/>
    </div>
  );
}

export default App;
