import React from 'react';
import Navbar from './components/layout/Header'
import './App.css';
import Search from './components/layout/Search';
import Explore from './components/layout/Explore';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Explore />
    </div>
  );
}

export default App;
