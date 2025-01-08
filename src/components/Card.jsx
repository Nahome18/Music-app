import React from 'react'

export default function Card({index, result, onTrackSelect, setFavList}){

    function handleFavClick() {
        const newTrack = result;
        setFavList((prev) => {
            if (prev.some((item) => item.id === newTrack.id)) {
                // Remove track if it already exists
                return prev.filter((item) => item.id !== newTrack.id);
            } else {
                // Add track if it doesn't exist
                return [...prev, newTrack];
            }
        });
    }

    return(
        <div>
            <button onClick={handleFavClick}>Add Fav</button>
        
        <div key={index} className="track-card"> 
        
            <img src={result.album.cover_medium} alt={result.title} className="album-cover" />
            <h3 className="track-title">{result.title}</h3>
            <p className="artist-name">{result.artist.name}</p>
            <div className="play-icon" onClick={() => onTrackSelect(result)}>
                <i className="fi fi-rr-play-circle"></i>
            </div>
            
        </div>
        </div>
    )
}

