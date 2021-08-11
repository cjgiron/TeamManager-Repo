import React from 'react';
import Main from './views/Main';
import { Router } from '@reach/router';
import AthleteForm from './components/AthleteForm';
import AthleteStatus1 from './views/AthleteStatus1';
import AthleteStatus2 from './views/AthleteStatus2';
import AthleteStatus3 from './views/AthleteStatus3';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/athletes/list"/>
        <AthleteForm path="athletes/addAthlete"/>
        <AthleteStatus1 path="/status/game/1" />
        <AthleteStatus2 path="/status/game/2" />
        <AthleteStatus3 path="/status/game/3" />
      </Router>
    </div>
  );
}

export default App;
