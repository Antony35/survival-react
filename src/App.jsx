import {  BrowserRouter, Route, Routes } from "react-router-dom"
import { Menu } from '@/pages/Menu'
import { Game } from '@/pages/Game'
import { LeaderBoard } from '@/pages/LeaderBoard'
import { Settings } from '@/pages/Settings'

function App() {

  const version = '0.0.1'

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu version={version} />} />
        <Route path="game" element={<Game />} />
        <Route path="leaderboard" element={<LeaderBoard />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
