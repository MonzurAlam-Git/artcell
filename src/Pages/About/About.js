import React from 'react';
import mnz from "../../../src/images/name.jpg"

const About = () => {
    return (
        <div className='container mt-5 d-flex align-items-center justify-content-center '>
            <h4 >Name : Manzurul Alam </h4>
            <img className='w-25' src={mnz} alt="" />
            <p>A CSE graduated Junior Front End Developer , dream to work with eye catching design and smooth web experience. Clean and reusable coding , Out-of-Box scrolling experience also my dream of being expertise. So as an open leaner I would love to join in entry level position to add value for company as well as broadening my knowledge</p>
        </div>
    );
};

export default About; 