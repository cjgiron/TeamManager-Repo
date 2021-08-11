import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from "@reach/router";
import "../styles/athleteForm.css";


const AthleteForm = () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const [position, setPosition] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/athletes', {
            name,
            position
        })
            .then(res => {
                console.log(res);
                navigate('/athletes/list');
            })
            .catch(err=>console.log(err))
        
        setName("")
        setPosition("")
    }
    //onChange to update firstName and lastName
    return (
        <div>
            <Link to={'/athletes/list'}><strong>Manage Athletes</strong></Link> | <Link to={'/status/game/1'}>Manage Athlete Status</Link>
            <div class="list_add">
                <Link to={'/athletes/list'}>List</Link> | <span> </span>
                <Link to={'/athletes/addAthlete'}><strong>Add Athlete</strong></Link>
                <form onSubmit={onSubmitHandler}>
                    <h2>Add Athlete</h2>
                    <div className="form-group">
                        <label>Athlete Name: </label>
                        <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                    </div>
                    <div className="form-group">
                        <label>Preferred Position: </label>
                        <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default AthleteForm;