import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

export default function GenrePage({onTrackSelect }) {
    const [tracks, setTracks] = useState([]);
    const playlistId = '1282483245'; // Deezer playlist ID

    useEffect(() => {
        // Fetch playlist data from Deezer API
        async function fetchPlaylist() {
            try {
                const response = await fetch(`/api/playlist/${playlistId}`);
                const data = await response.json();
                if (data.tracks && data.tracks.data) {
                    setTracks(data.tracks.data);
                } else {
                    console.error('No tracks found in the playlist');
                    console.log(data);
                }
            } catch (error) {
                console.error('Error fetching playlist:', error);
            }
        }

        fetchPlaylist();
    }, []);

    return (
        <div className='genres-page'>
            <h1>Genre Page</h1>
            <h2>Playlist Tracks</h2>
            <div className='horizontal-card'>
                {tracks.map((track, index) => (
                    <Card key={index} result={track} onTrackSelect={onTrackSelect}/>
                ))}
            </div>
        </div>
    );
}
