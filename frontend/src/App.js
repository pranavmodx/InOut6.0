import React from 'react';

import Header from './components/layout/Header';
import Search from './components/layout/Search';
import Explore from './components/layout/Explore';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/explore" component={Explore} />
          </Switch>
        </div>
      </Router>
    
    </>
  );
}

export default App;
