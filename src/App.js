import React from 'react';
import './App.css';
import Create from './Components/create.js';
import Read from './Components/read'

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <div>
        <Create/>
      </div>
    </div>
  );
}

export default App;
