import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navBar/NavBar';

const Items = () => {
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
            <NavBar></NavBar>
            <div className='all-cards mb-5'>

                {
                    cards.map(card =>
                        <div className="card mx-auto" key={card._id}>
                            <img src={card.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="">{card.name}</h3>
                                <p className="card-text mb-0">{card.discription} Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    <br />
                                    <small>{card.supplierName}</small>
                                </p>
                                <p className='mb-0'>quantity: 15pc</p>
                                <h4 className='mb-4 mt-2'>Price: $4493749</h4>

                                <button className='card-buttons' >Delete</button>
                                <Link className='card-buttons ms-3' to={'/inventory/' + card._id}>update</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Items;