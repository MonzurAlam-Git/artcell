import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Album from '../Album/Album';
import "./albums.css"

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        fetch("albums.json")
            .then(res => res.json())
            .then(data => setAlbums(data))
    }, []);
    console.log(albums);



    return (
        <div id='albums' className='mt-2 d-flex container '>

            {
                albums.map((album) => (<Album key={album.id} album={album}></Album>))
            }
        </div >
    );
};

export default Albums;