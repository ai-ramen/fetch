import logo from './logo.svg';
import './App.css';
import FetchData from './components/fetch';

import {useState} from "react";

function App() {
  return (
    <div className="App">
      
        
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Find Name by ID</h1>
      
   
      <FetchData/>
      
    </div>
  );
}

export default App;
