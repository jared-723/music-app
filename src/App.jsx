
import { Route, Routes } from 'react-router'
import './App.css'
import Page404 from './pages/Page404'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import TrackDetail from './pages/TrackDetail'
import ArtistDetail from './pages/ArtistDetail'
import PlayLists from './pages/PlayLists'
import PlayListDetail from './pages/PlayListDetail'
import PlayListShared from './pages/PlayListShared'

function App() {


  return (
    <Routes>

      <Route path="/auth/login" element={<Login />}/>
      <Route path="/auth/register" element={ <Register />}/>

      <Route path="/" element={<Home />}/>
      <Route path="/track/:id" element={<TrackDetail />}/>
      <Route path="/artists/:id" element={<ArtistDetail />}/>
      <Route path="/playlists" element={<PlayLists />}/>
      <Route path="/playlists/:id" element={<PlayListDetail />}/>
      <Route path="/playlists/public/:id" element={<PlayListShared />}/>

      <Route path="*" element={<Page404 />}/>
    </Routes>
  )
}

export default App
