import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import './Inventory.css'

const Inventory = () => {
    const { id } = useParams();
    const [card, setcard] = useState({})
    const [quantitys, setquntity] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/card/${id}`)
            .then(res => res.json())
            .then(data => {
                setcard(data);
                setquntity(data.quantity);
            })
    }, [])
    const updateQuantity = (props) => {
        // parseing Float the quantity 
        const quantitsy = parseFloat(props.quantity);
        if (quantitsy === 0) {
            return;
        }
        // set the quantity in UI 
        const stateQuantity = quantitys;
        const carrentQuantity = stateQuantity - 1;
        setquntity(carrentQuantity);

        const updata = { quantity: carrentQuantity };
        // updata req to the database 
        const url = `http://localhost:5000/update/${props._id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updata),
        })
            .then(response => response.json())
            .then(data => {
                const inserted = data.acknowledged;
                if (inserted) {
                    alert('Yes Delivered, thanks');
                }
            });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (e.target.stok.value === "") {
            return
        }
        const inputValue = parseFloat(e.target.stok.value);
        const stateQuantity = quantitys;
        const carrentQuantity = stateQuantity + inputValue
        // set the quantity in UI 
        setquntity(carrentQuantity);
        // updata req to the database 
        const quantity = card.quantity + inputValue;
        const updata = { quantity: quantity };
        const url = `http://localhost:5000/update/${card._id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updata),
        })
            .then(response => response.json())
            .then(data => {
                alert('Restocked')
            });

    };

    return (
        <div>
            {/* nav bar  */}
            <NavBar></NavBar>

            {/* single card details  */}

            <div className='card-details'>
                <div className="card m-0 w-100" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            {/* card img  */}
                            <img src={card.img} className="img-fluid rounded-start h-100" alt="..." />
                        </div>
                        <div className="col-md-8">
                            {/* card info  */}
                            <div className="card-body">
                                {/* card name and id  */}
                                <h2 className="card-title">{card.name} </h2>
                                <h3> ID :{card._id}</h3>
                                {/* card discription  */}
                                <h6 className="card-text">{card.discription} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, recusandae hic assumenda velit neque soluta enim, et veniam eligendi, ea id beatae? Vero qui, beatae veniam culpa rem nisi cumque. </h6>
                                {/* items price  */}
                                <h3 className='my-2'>Price: ${card.price}</h3>
                                {/* items quantity */}
                                <h5 className='mb-3'>Quantity: {quantitys}pc</h5>
                                {
                                    quantitys === 0 ? <h5 className='mb-3'>SOLD</h5> : ''
                                }
                                {/* Delivered button  */}
                                {
                                    quantitys === 0 ? '' : <button className='card-buttons mb-3' onClick={() => updateQuantity(card)}>Delivered</button>
                                }


                                {/* Restocking  */}
                                <div>
                                    <h4 className='fw-bold mb-3'>Restock the items</h4>
                                    <form onSubmit={onSubmit} className="align-items-center">
                                        {/* input fild for restocking */}
                                        <div className="col-auto">
                                            <input type="number" id="inputPassword6" className="form-control w-50" name='stok' />
                                        </div>
                                        <br />
                                        {/* Restock button  */}
                                        <button type="submit" className='card-buttons'>Restock</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Manage all inventory items link */}
            <div className='d-flex justify-content-center'>
                <Link to='/manageInventories' className='card-button mb-4'>Manage Inventories</Link>
            </div>

        </div>
    );
};

export default Inventory;