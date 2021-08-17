import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "@reach/router";
import Game from '../components/Game';
import "../styles/athleteStatus.css"


const AthleteStatus = props => {

    const [athletes, setAthletes] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { gameNum } = props;
    const isActive = ({isCurrent}) => (isCurrent ? { className: "active" } : {});

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
                <h1>Athlete Status - Game { gameNum }</h1>
                <div class="games">
                    <Link to="/status/game/1" getProps={isActive}>Game 1</Link> | 
                    <Link to="/status/game/2" getProps={isActive}>Game 2</Link> | 
                    <Link to="/status/game/3" getProps={isActive}>Game 3</Link>
                </div>
                { loaded && <Game athletes={athletes} gameNum={gameNum} /> }
            </div>
        </div>
    )
}

export default AthleteStatus;