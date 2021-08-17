import React from 'react';
import Main from './views/Main';
import { Router, Redirect, Link } from '@reach/router';
import AthleteForm from './components/AthleteForm';
import AthleteStatus from './views/AthleteStatus';



function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/athletes/list"/>
        <AthleteForm path="athletes/addAthlete"/>
        <AthleteStatus path="/status/game/:gameNum" />
        <Redirect from="/" to="/athletes/list" noThrow="true"/>
      </Router>
    </div>
  );
}

export default App;
