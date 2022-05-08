import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import NavBar from '../navBar/NavBar';

const MyItems = () => {
    const [Mycards, setMycards] = useState([]);
    const user = useAuthState(auth)
    const email = user[0]?.email
    useEffect(() => {
        fetch(`https://shielded-woodland-29897.herokuapp.com/myitems?jwtemail=${email}`)
            .then(res => res.json())
            .then(data => {
                setMycards(data)
            })
    }, [])
    // delete Item api call
    const deleteItem = (props) => {
        const confirm = window.confirm('Do you want to Remove it')
        if (confirm) {
            fetch(`https://shielded-woodland-29897.herokuapp.com/Myitems/${props}`, {
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
                                <p className="card-text mb-0">{card.Discription}
                                    <br />
                                    <small>supplier Name: {card.supplierName}</small>
                                </p>
                                <p className='mb-0'>quantity: {card.quantity}pc</p>
                                <h4 className='mb-4 mt-2'>Price: ${card.price}</h4>
                                <button className='card-buttons' onClick={() => deleteItem(card._id)}>Delete</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyItems;