import React, { useEffect, useState } from 'react';
import useLocalStorage from './GetSavedValue';
import '../index.css'

export default function FavoritesPage({track}){
    const [favList, setFavList] = useLocalStorage('fav', track)


    return(
        <h1 className="favorites-page">Favorites Page</h1>

    )
};
