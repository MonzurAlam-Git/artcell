import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { fabSpotify } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
    return (
        <div className='bg-primary'>
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
            <FontAwesomeIcon icon="fa-brands fa-spotify" />
        </div>
    );
};

export default Footer;