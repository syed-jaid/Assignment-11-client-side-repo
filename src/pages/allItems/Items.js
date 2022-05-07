import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navBar/NavBar';

const Items = () => {
    const [cards, setcards] = useState([])

    // get data from database
    useEffect(() => {
        fetch('http://localhost:5000/cards')
            .then(res => res.json())
            .then(data => {
                setcards(data)
            })
    }, [])
    const deleteItem = (props) => {
        console.log(props)
        const confirm = window.confirm('Do you want to Remove it')
        if (confirm) {
            fetch(`http://localhost:5000/delete/${props}`, {
                method: 'Delete',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaing = cards.filter(note => note._id !== props)
                        setcards(remaing)
                    }
                })
        }
    }
    return (
        <div>
            <NavBar ></NavBar>
            <div className='all-cards mb-5'>
                {
                    cards.map(card => <div key={card._id} className="card mx-auto">
                        <img src={card.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="">{card.name}</h3>
                            <p className="card-text mb-0">{card.discription} Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                <br />
                                <small>{card.supplierName}</small>
                            </p>
                            <p className='mb-0'>quantity: 15pc</p>
                            <h4 className='mb-4 mt-2'>Price: $4493749</h4>
                            {/* delete button  */}
                            <button className='card-buttons' onClick={() => deleteItem(card._id)}>Delete</button>
                            {/* updata button  */}
                            <Link className='card-buttons ms-3' to={'/inventory/' + card._id}>Update</Link>
                        </div>
                    </div>
                    )
                }
            </div>
            {/* add a new items  */}
            <h1 className='text-center mt-4 fw-bold'>ADD NEW ITEMS</h1>
            <div className='d-flex justify-content-center m-4'>
                <Link className='card-buttons ms-3' to='/addItems'>Add Item</Link>
            </div>
        </div>
    );
};

export default Items;