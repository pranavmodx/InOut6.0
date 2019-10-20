import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Search from './components/layout/Search';
import Explore from './components/layout/Explore';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/explore" component={Explore} />
          </Switch>
        </div>
      </Router>
    </div>
    </>
  );
}

export default App;
