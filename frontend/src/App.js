import React from 'react';
import Navbar from './components/layout/Header'
import './App.css';
import Search from './components/layout/Search';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Search></Search>
    </div>
  );
}

export default App;
