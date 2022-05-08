import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
            <h1 className='text-center mt-4'>Sorry the page is not found...</h1>
            <div className='d-flex justify-content-center'>
                <Link to={'/'}>
                    <button className='card-button px-5 fs-3'>Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;