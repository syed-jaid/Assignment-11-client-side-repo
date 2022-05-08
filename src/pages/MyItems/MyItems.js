import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/NavBar';

const MyItems = () => {
    const [Mycards, setMycards] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/myitems')
            .then(res => res.json())
            .then(data => {
                setMycards(data)
            })
    }, [])
    const deleteItem = (props) => {
        const confirm = window.confirm('Do you want to Remove it')
        if (confirm) {
            fetch(`http://localhost:5000/Myitems/${props}`, {
                method: 'Delete',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaing = Mycards.filter(note => note._id !== props)
                        setMycards(remaing)
                    }
                })
        }
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className='all-cards mb-5'>
                {
                    Mycards.map(card =>
                        <div className="card mx-auto" key={card._id}>
                            <img src={card.Image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="">{card.name}</h3>
                                <p className="card-text mb-0">{card.discription} Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    <br />
                                    <small>{card.supplierName}</small>
                                </p>
                                <p className='mb-0'>quantity: {card.quantity}pc</p>
                                <h4 className='mb-4 mt-2'>Price: $4493749</h4>
                                <button className='card-buttons' onClick={() => deleteItem(card._id)}>Deletes</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyItems;