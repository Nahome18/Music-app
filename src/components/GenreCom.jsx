import React from 'react'
import Card from '../components/Card';
import { useState, useEffect } from 'react';

export default function GenreCom({name, playlistId,onTrackSelect}){
    const [tracks, setTracks] = useState([]);
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
            <div className='container'>
                <h2 className='genre-name'>{name}</h2>
                
                <div className='horizontal-card'>
                    {tracks.map((track, index) => (
                    <Card key={index} result={track} onTrackSelect={onTrackSelect}/>
                ))}
                </div>
            </div>

    )
}
