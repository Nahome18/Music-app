import React, { useEffect, useState } from 'react';
import ListCard from '../components/ListCard';
import '../index.css'

export default function FavoritesPage({favList}){
    


    return(
        <div className='home-page'>
            <h1 className="favorites-page">Favorites Page</h1>

            {favList.map((item, index) => {
                return ( 
                    <ListCard 
                        num={index + 1}
                        key={item.id}
                        image={item.album.cover_small}
                        title={item.album.title}
                        artist={item.artist.name}
                        album={item.album.title}
                        duration={item.duration}
                    />
                );
            })}
        </div>
        
    )
};
