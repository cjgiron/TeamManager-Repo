import React, { useState } from 'react'
import axios from 'axios';


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
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name: </label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>Position: </label><br/>
                <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default AthleteForm;