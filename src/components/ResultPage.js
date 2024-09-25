import react from "react"
import { useState,useEffect } from "react"
import axios from "axios"

function ResultPage(){
    const[game,setGame]=useState([])
    async function getData(){
        await axios.get("https://66b438ea9f9169621ea2211e.mockapi.io/game")
       .then((response=>{
        setGame(response.data)
       }))
       console.log(game)

    }
    useEffect(()=>{
        getData()
    },[])
return(
    <div>
       {
        game.map((val)=>(
            <>
              <p key={val.id}>{val.id}</p>
              <p>{val.player1name}</p>
              <p>{val.player2name}</p>
              <p>{val.player1choice}</p>
              <p>{val.player2choice}</p>
              <p>{val.round}</p>
              <p>{val.winner}</p>
              </>
          

        ))
       }
           
    </div>
)

}
export default ResultPage;