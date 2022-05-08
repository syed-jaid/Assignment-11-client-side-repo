import React from 'react';

const Loading = () => {
    return (
        <div className='loadingdiv'>
            <div className="text-center">
                <div className="spinner-border loading-spinner" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h1 className='text-center'>Loading...</h1>
            </div>
        </div>
    );
};

export default Loading;