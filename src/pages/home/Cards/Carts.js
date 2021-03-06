import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Carts = () => {
    const [cards, setcards] = useState([])
    useEffect(() => {
        fetch('https://shielded-woodland-29897.herokuapp.com/cards')
            .then(res => res.json())
            .then(data => {
                setcards(data)
            })
    }, [])
    return (
        <div className='all-cards mb-5'>
            {
                cards.slice(0, 6).map(card =>
                    <div className="card mx-auto" key={card._id}>
                        <img src={card.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="">{card.name}</h3>
                            <p className="card-text mb-0">{card.discription}
                                <br />
                                <small>supplier Name: {card.supplierName}</small>
                            </p>
                            <p className='mb-0'>quantity: {card.quantity}pc</p>
                            <h4 className='mb-4 mt-2'>Price: $ {card.price}</h4>
                            <Link className='card-buttons' to={'/inventory/' + card._id}>update</Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Carts;