import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "@reach/router";
import Game from '../components/Game';
import "../styles/athleteStatus.css"


const AthleteStatus1 = props => {

    const [athletes, setAthletes] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/athletes')
            .then(resp => {
                setAthletes(resp.data);
                setLoaded(true);
                console.log(resp.data);
            })
    }, [])

    return (
        <div>
            <Link to={'/athletes/list'}>Manage Athletes</Link> | <Link to={'/status/game/1'}><strong>Manage Athlete Status</strong></Link>
            <div class="game_status">
                <h1>Athlete Status - Game 1</h1>
                <div class="games">
                    <Link to={'/status/game/1'}><strong>Game 1</strong></Link> | <Link to={'/status/game/2'}>Game 2</Link> | <Link to={'/status/game/3'}>Game 3</Link>
                </div>
                {loaded && <Game athletes={athletes}/>}
            </div>
        </div>
    )
}

export default AthleteStatus1;