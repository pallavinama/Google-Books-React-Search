import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        <Search />
      </div>
    </Router>
  );
}

export default App;
