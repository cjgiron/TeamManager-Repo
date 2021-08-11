import React, { useEffect, useState } from 'react'
import { Link } from "@reach/router";
import "../styles/main.css";
import axios from 'axios';
import AthleteList from '../components/AthleteList';


const Main = () => {

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

    const removeFromDom = athId => {
        setAthletes(athletes.filter(athlete => athlete._id !== athId))
    }

    return (
        <div>
            <Link to={'/athletes/list'}><strong>Manage Athletes</strong></Link> | <Link to={'/status/game/1'}>Manage Athlete Status</Link>
            <div class="list_add">
                <Link to={'/athletes/list'}><strong>List</strong></Link> | <span> </span>
                <Link to={'/athletes/addAthlete'}>Add Athlete</Link>
                {loaded && <AthleteList athletes={athletes} removeFromDom={removeFromDom}/>}
            </div>
        </div>
    )
}

export default Main;