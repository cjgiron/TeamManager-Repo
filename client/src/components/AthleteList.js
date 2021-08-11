import React from 'react';
import axios from 'axios';
import "../styles/athleteList.css"

const AthleteList = props => {
    const { removeFromDom } = props;

    const handleDelete = (athId) => {
        axios.delete("http://localhost:8000/api/athletes/" + athId)
            .then(res => {
                removeFromDom(athId)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Athlete Name</th>
                        <th>Preferred Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {props.athletes.map((athlete, idx) => {
                    return <tr key={idx}>
                        <td>{athlete.name}</td>
                        <td>{athlete.position}</td>
                        <td><button onClick={(e) => {
                            handleDelete(athlete._id)
                        }}
                        class="btn btn-danger"
                        style={{width: "50%"}}
                        >Delete</button></td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default AthleteList;