import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Button = (props) => {
    const { athlete, gameNum } = props;
    const game = athlete.game;
    const stat = game[gameNum-1];
    const [status, setStatus] = useState(stat);   
    
    useEffect(() => {
    setStatus(stat);
    }, [stat]);

    const handleClick = (val) => {
    let update = [...game];
    update[gameNum-1] = val;
    axios.put(`http://localhost:8000/api/athlete/${athlete._id}/status`, { game: update }) // update the database
        .then(() => {
        game[gameNum-1] = val;  // update the local data
        setStatus(val);  // update the state
        })
        .catch(console.error);
    };
    return (
    <div>
        <button className={status === 1 ? 'green' : ''} onClick={ ()=>handleClick(1) }>Playing</button>
        <button className={status === -1 ? 'red' : ''} onClick={ ()=>handleClick(-1) }>Not Playing</button>
        <button className={status === 0 ? 'yellow' : ''} onClick={ ()=>handleClick(0) }>Undecided</button>
    </div>
    );
}

export default Button;