import react from "react"
import { useState } from "react"
import {  Select } from 'semantic-ui-react'

function Choices({setplayer1choice,setplayer2choice,playRound}){
    const[p1choice,setp1choice]=useState("")
    const[p2choice,setP2choice]=useState("")
    function handleSubmitChoice(){
        setplayer1choice(p1choice);
        setplayer2choice(p2choice);
        playRound()
    }
    return(
        <div className="cont">
            <h2>Make your selction :</h2>
            <label>player1 choice :</label>
            <select onChange={(e)=>{setp1choice(e.target.value)}} value={p1choice}>
                <option value="">select</option>
                <option value="stone">Stone</option>
                <option value="paper">Paper</option>
                <option value="scissor">Scissor</option>
            </select>
            <br/>
            <label>player2 choice :</label>
            <select onChange={(e)=>{setP2choice(e.target.value)}} value={p2choice}>
                <option value="">selcet</option>
                <option value="stone">Stone</option>
                <option value="paper">Paper</option>
                <option value="scissor">Scissor</option>
            </select>
            <br/>
            <button onClick={handleSubmitChoice}>Submit choice</button>
            
        </div>
        
    )
}
export default Choices;