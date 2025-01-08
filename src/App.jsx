import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PreviewPage from './components/PreviewPage';
import Tracker from './components/Tracker';
import Navbar from './components/Nav';

import GenrePage from './pages/GenrePage'
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import PlaylistPage from './pages/PlaylistPage';
import { Route, Routes } from 'react-router-dom'
import useLocalStorage from './pages/GetSavedValue';


function App() {
    const [results, setResults] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [favList, setFavList] = useLocalStorage('fav', [])

    const handleTrackSelect = (track) => {
      setCurrentTrack(track);
  };


// storing updated list locally
useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(favList));
    console.log(favList);
}, [favList]);


    return (
        <div className="return-container">
            <Header setResults={setResults} />
            <main>
                <Navbar/>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/genres" element={<GenrePage onTrackSelect={handleTrackSelect} />}/>
                    <Route path="/results" element={<PreviewPage results={results} onTrackSelect={handleTrackSelect} setFavList={setFavList}/> } />
                    <Route path="/favorites" element={<FavoritesPage favList={favList}/>}/>
                    <Route path="/playlists" element={<PlaylistPage />}/>
                </Routes>

            </main>
            <Tracker className="track" track={currentTrack} />
        </div>
    );
}

export default App;