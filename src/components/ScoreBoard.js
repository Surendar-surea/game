import react from "react"
function ScoreBoard({player1name,player2name,player1score,player2score,round,result,winner}){
    return(
        <div className="cont">
            <h1>Score Board</h1>
            <table>
            <tr>
                <th>Round</th>
                <th>Player Name</th>
                <th>Player Score</th>
            </tr>
            <tr>
                <td>{round}</td>
                <td>{player1name}</td>
                <td>{player1score}</td>
            </tr>
            <tr>
                <td>{round}</td>
                <td>{player2name}</td>
                <td>{player2score}</td>
            </tr>
            </table>
           
         </div>
    )
}
export default ScoreBoard;