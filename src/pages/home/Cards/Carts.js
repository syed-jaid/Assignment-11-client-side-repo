import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Carts = () => {
    const [cards, setcards] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setcards(data)
            })
    }, [])
    return (
        <div>
            <div className='all-cards'>
                {
                    cards.map(card =>
                        <div className="card mx-auto" >
                            <img src={card.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{card.name}</h5>
                                <p className="card-text mb-0">{card.discription} Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    <br />
                                    <small>{card.supplierName}</small>
                                </p>
                                <p className='mb-0'>quantity: 15pc</p>
                                <h4 className='mb-4 mt-2'>Price: $4493749</h4>

                                <Link className='card-buttons ' to={'/inventory/' + card.img}>update</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Carts;