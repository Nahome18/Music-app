import React, { useEffect, useState } from 'react';
import '../index.css'

export default function FavoritesPage({favList}){
    
    

    return(
        <div className='fav-page'>
            <h1 className="favorites-page">Favorites Page</h1>
            {favList.map(item => <h2>{item}</h2>)}
        </div>
        
    )
};
