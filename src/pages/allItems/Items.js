import React, { useEffect, useState } from 'react';

const Items = () => {
    const [cards, setcards] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/cards')
            .then(res => res.json())
            .then(data => {
                setcards(data)
            })
    }, [])
    return (
        <div>
            <h1>items</h1>

            {
                cards.map(card => <h1>{card.name}</h1>)
            }
        </div>
    );
};

export default Items;