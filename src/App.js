import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import GameLogic from "./components/GameLogic"
import ScoreBoard from "./components/ScoreBoard"
import ResultPage  from "./components/ResultPage"
function App() {
  return (
   
   <div>
    <h1>Stone ,Paper and Scissor Game</h1>
   
    <Routes>
      <Route path="/" element={<GameLogic/>}/>
      <Route path="/result" element={<ResultPage/>}/>
      </Routes>
    
  
   </div>
  );
}

export default App;
