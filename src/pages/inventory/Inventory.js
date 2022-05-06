import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
                                <h5 className="card-title">{card.name}</h5>
                                {/* card discription  */}
                                <p className="card-text">{card.discription} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, recusandae hic assumenda velit neque soluta enim, et veniam eligendi, ea id beatae? Vero qui, beatae veniam culpa rem nisi cumque. </p>
                                <p className='mb-0'>quantity: 15pc</p>
                                <h4 className='mb-4 mt-2'>Price: $4493749</h4>
                                <button className='card-buttons'>update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;