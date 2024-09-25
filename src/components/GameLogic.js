import react from "react";
import PlayerInput from "./PlayerInput";
import { useState } from "react";
import Choices from "./Choices";
import ScoreBoard from "./ScoreBoard"
import "./Input.css"
import axios from "axios"
function GameLogic() {
  const [player1name, setPlayer1name] = useState("");
  const [player2name, setplayer2name] = useState("");
  const [player1choice, setPlayer1choice] = useState("");
  const [player2choice, setPlayer2choice] = useState("");
  const [player1score, setPlayer1score] = useState(0);
  const [player2score, setPlayer2score] = useState(0);
  const[round,setRound]=useState(1)
  const[winner,setWinner]=useState("")
  const [result, setResult] = useState("");
  function getWinner(p1, p2) {
   if(p1===p2){
    return "It is tie"
   }
   else if( (p1 === "stone" && p2 === "scissor") ||  
   (p1 === "scissor" && p2 === "paper") ||  
   (p1 === "paper" && p2 === "stone") )
   {return "player 1"}
   else{
    return "player 2"
    
   }
  } 
  const newRound={
    player1name,
    player2name,
    player1choice,
    player2choice,
    round,
    winner
  }
  async function postData() {
    await axios.post("https://66b438ea9f9169621ea2211e.mockapi.io/game",{
      newRound
    })
  console.log("data successfuly submitted")
    
    
  }
  function playRound() {
    const winner = getWinner(player1choice, player2choice);
    
    let updatedPlayer1Score = player1score;
    let updatedPlayer2Score = player2score;

    if (winner === "player 1") {
        updatedPlayer1Score++;
        setWinner(`${player1name} is the winner`);
        setPlayer1score(updatedPlayer1Score); // update player 1 score
    } else if (winner === "player 2") {
        updatedPlayer2Score++;
        setWinner(`${player2name} is the winner`);
        setPlayer2score(updatedPlayer2Score); // update player 2 score
    } else {
        setWinner("It's a tie");
    }

 setRound(round+1)
    
   

    if (round >= 6) {
        const finalWinner = updatedPlayer1Score > updatedPlayer2Score ? player1name : player2name;
        alert(`Game Over! ${finalWinner} is the winner`);
        resetGame(); // Optionally reset the game
    }
}

function resetGame() {
    setPlayer1score(0);
    setPlayer2score(0);
    setRound(0);
    setPlayer1choice("");
    setPlayer2choice("");
    setWinner("");
}



    
  

return (
    <div>
        
     
      <PlayerInput
        setplayer1name={setPlayer1name}
        setplayer2name={setplayer2name}
        postdata={postData}
        
      />
  
      <Choices
        setplayer1choice={setPlayer1choice}
        setplayer2choice={setPlayer2choice}
        playRound={playRound}
      />
   <ScoreBoard 
   player1name={player1name}
   player2name={player2name}
   player1score={player1score}
   player2score={player2score}
   round={round}
   result={result}
   winner={winner}

   />
    </div>
   
  );
  
}
export default GameLogic;
