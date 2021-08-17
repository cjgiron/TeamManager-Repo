import "../styles/game.css"
import "./Button"

const Game = props => {
    const { athletes, gameNum } = props;

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
                {athletes.map((athlete, idx) => {
                    return <tr key={idx}>
                        <td>{athlete.name}</td>
                        <td class="buttons">
                            <Button athlete={athlete} gameNum={gameNum} /> 
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Game;