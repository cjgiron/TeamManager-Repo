import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/button.css"


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
    <div class="buttons">
        <button style={{ width: '250px'}} className={status === 1 ? 'button green' : 'button'} onClick={ ()=>handleClick(1) }>Playing</button>
        <button style={{ width: '250px'}} className={status === -1 ? 'button red' : 'button'} onClick={ ()=>handleClick(-1) }>Not Playing</button>
        <button style={{ width: '250px'}} className={status === 0 ? 'button yellow' : 'button'} onClick={ ()=>handleClick(0) }>Undecided</button>
    </div>
    );
}

export default Button;