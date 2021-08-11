import React from 'react';
import Main from './views/Main';
import { Router } from '@reach/router';
import AthleteForm from './components/AthleteForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/athletes/list"/>
        <AthleteForm path="athletes/addAthlete"/>
      </Router>
    </div>
  );
}

export default App;
