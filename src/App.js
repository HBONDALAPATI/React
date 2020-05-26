import React from 'react';
import './App.css';
// import { AppBar } from '@material-ui/core';
import PrimarySearchAppBar from './AppBar'
import UserProfile from './UserProfile';


function App() {
  return (
    <div className="App">
    
      <div><PrimarySearchAppBar/></div>
      <div><UserProfile/></div>
        <h1> Hari Bondalapati</h1>
       </div>
  );
}

export default App;

