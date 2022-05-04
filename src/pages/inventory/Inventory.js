import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>inventory </h1>
        </div>
    );
};

export default Inventory;