import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import WeeklyTopSongs from "./pages/WeeklyTopSongs"
import DailyTopSongs from "./pages/DailyTopSongs"
import WeeklyTopArtists from "./pages/WeeklyTopArtists"
import { WeeklyTopAlbums } from "./pages/WeeklyTopAlbums"
import NavBar from "./components/navBar"
function App() {

  return (
    <div className="app overflow-x-hidden">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/weeklyTopSongs" element={<WeeklyTopSongs/>} />
          <Route path="/weeklyTopArtists" element={<WeeklyTopArtists />} />
          <Route path="/weeklyTopAlbums" element={<WeeklyTopAlbums />} />
          <Route path="/dailyTopSongs" element={<DailyTopSongs />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
