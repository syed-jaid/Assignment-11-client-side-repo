import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import './Inventory.css'

const Inventory = () => {
    const { id } = useParams();
    const [card, setcard] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/card/${id}`)
            .then(res => res.json())
            .then(data => {
                setcard(data)
            })
    }, [])
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
                            <img src={card.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            {/* card info  */}
                            <div className="card-body">
                                {/* card name  */}
                                <h2 className="card-title">{card.name}</h2>
                                {/* card discription  */}
                                <h5 className="card-text">{card.discription} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, recusandae hic assumenda velit neque soluta enim, et veniam eligendi, ea id beatae? Vero qui, beatae veniam culpa rem nisi cumque. </h5>
                                {/* items price  */}
                                <h3 className='my-2'>Price: $4493749</h3>
                                {/* items quantity */}
                                <h5 className='mb-0'>Quantity: 15pc</h5>
                                {/* Delivered button  */}
                                <button className='card-buttons mb-4'>Delivered</button>
                                <br />
                                {/* Restocking  */}
                                <div>
                                    <h4 className='fw-bold mb-3'>Restock the items</h4>
                                    <form>
                                        {/* input fild for restocking */}
                                        <div className='my-3 w-100' >
                                            <input type="number" name="number" id="" />
                                        </div>
                                        {/* Restock button  */}
                                        <input type="button" className='card-buttons' value="Restock " />
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