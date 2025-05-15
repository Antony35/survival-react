import SkullIcone from "@/assets/img/icons/skull.svg"
import { useState } from "react"
import { Button } from "../components/Button"
import { useRessources } from "../Store/Zustand"
import { Link } from "react-router-dom"

export function LeaderBoard() {
    

    const time = useRessources(state => state.time)  

    const [gameOver] = useState(true)
    const [name, setName] = useState("")
    const [showForm, setShowForm] = useState(true)
    const [playAgain, setPlayAgain] = useState(false)

    const [leaderBoards, setLeaderBoard] = useState([{
        name: 'jean',
        score: 100
    }])

    const handleSubmit = (ev) => {
        ev.preventDefault()        
        setLeaderBoard(prevLeaderBoard => [...prevLeaderBoard, {name: name, score: time}])
        setShowForm(false)
        setPlayAgain(true)
    }

    return (
      <div className="bg-blue-300 w-full h-screen flex flex-col justify-center items-center gap-2">
        {gameOver && (
          <div className="flex flex-col justify-center items-center">
            <img className="w-20" src={SkullIcone} alt="skull" />
            <h1 className="font-bold text-7xl text-amber-50">Game Over</h1>
          </div>
        )}
        <h3 className=" text-amber-50 text-3xl">Leaderboard</h3>
        {showForm && (
          <form className="mt-10 flex gap-5" onSubmit={(ev) => handleSubmit(ev)}>
          <input
            className="ps-5 border-2 border-amber-50 w-100"
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder="Entrer votre nom"  
          />
          <Button value="Envoyer" disabled={name.length <= 3}/>
        </form>
        )}
        {playAgain && (
                    <Link to="/game" className={`py-3 bg-green-300 px-10 text-black rounded-2xl text-center`}>Play</Link>
        )}
        <ul className="bg-blue-100 flex flex-col items-center rounded-xl border-1 border-blue-200 w-100 mt-5">
          {
            leaderBoards.map((leaderBoard, index) => (
                 <li key={index} className="flex flex-col items-start w-full p-4 border-b border-blue-200 last:border-b-0">
                    <h3>{leaderBoard.name}</h3>
                    <p>Score: {leaderBoard.score}</p>
                </li>
            ))}
        </ul>
      </div>
    );
    
}