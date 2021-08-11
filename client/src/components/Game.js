import "../styles/game.css"

const Game = props => {

    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Athlete Name</th>
                        <th class="actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {props.athletes.map((athlete, idx) => {
                    return <tr key={idx}>
                        <td>{athlete.name}</td>
                        <td class="buttons">
                        <button class="btn">Playing</button>
                        <button class="btn">Not Playing</button>
                        <button class="btn">Undecided</button>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Game;