import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Album from '../Album/Album';
import "./albums.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Row >
                {
                    albums.map((album) => (
                        <Col sm={12} md={4}>
                            <Album key={album.id} album={album}></Album>
                        </Col>
                    )
                    )
                }
            </Row>


        </div >
    );
};

export default Albums;