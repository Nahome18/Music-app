import React, { useEffect, useState } from 'react';
import ListCard from '../components/ListCard';
import '../index.css'

export default function HomePage(){
    const [songs, setSongs] = useState([])

    useEffect(() => {
        async function getData(){
            const response = await fetch("https://83g2xxt654.execute-api.us-east-1.amazonaws.com/default/playlist?playlistId=2098157264")
            
            const data = await response.json();
            if (data.tracks && data.tracks.data) {
                setSongs(data.tracks.data);
            } else {
                console.error('No tracks found in the playlist');
                console.log(data);
            }
            
        }
        getData();
     }, []);
    const [count, setCount] = 0

    return(
        <div className='home-page'>
            <h1>Popular hits</h1>
            {songs.map((item =>  <ListCard 
                    num={count}
                    key={item.id}
                    image={item.album.cover_small}
                    title={item.title_short}
                    artist={item.artist.name}
                    album={item.album.title}
                    duration={item.duration}
                    setCount={setCount}
                        />
                    ) 
                        )}

        </div>

    )
};
