import React from 'react';
import Albums from '../Albums/Albums';
import Banner from '../Banner/Banner';
import Members from '../Members/Members';
import "./Home.css"

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <h3 className='fw-bold text-center mt-5'> Albums </h3>
            <Albums></Albums>
            <Members></Members>

        </div>
    );
};

export default Home;
