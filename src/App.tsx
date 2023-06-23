import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import WeeklyTopSongs from "./pages/WeeklyTopSongs"
import WeeklyTopArtists from "./pages/WeeklyTopArtists"
import { WeeklyTopAlbums } from "./pages/WeeklyTopAlbums"
import NavBar from "./components/navBar"
import Footer from "./components/footer"
import UpcomingArtists from "./pages/UpcomingArtists"
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
          <Route path="/upcomingArtist" element={<UpcomingArtists />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
