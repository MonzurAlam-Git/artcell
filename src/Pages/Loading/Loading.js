import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Placeholder from 'react-bootstrap/Placeholder';



const Loading = () => {
    return (
        <div style={{ height: '200px' }} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="danger" />

        </div>
    );
};

export default Loading;