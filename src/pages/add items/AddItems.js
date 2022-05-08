import React, { useState } from 'react';
import NavBar from '../navBar/NavBar';

const AddItems = () => {
    const [name, setName] = useState('');
    const [price, setprice] = useState('');
    const [Quntity, setQuntity] = useState('');
    const [Sapliername, setSapliername] = useState('');
    const [Image, setImage] = useState('');
    const [Discription, setDiscription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        // set input data from input fild  
        const setdata = () => {
            setName(e.target.name.value)
            setprice(e.target.price.value)
            setQuntity(e.target.Quntity.value)
            setSapliername(e.target.Sapliername.value)
            setImage(e.target.imgUrl.value)
            setDiscription(e.target.Discription.value)
        }

        const data = {
            name: e.target.name.value,
            price: price,
            Quntity: Quntity,
            Sapliername: Sapliername,
            Image: Image,
            Discription: Discription
        }
        console.log(data)
        fetch('http://localhost:5000/add', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json(data))
            .then(data => {
                const inserted = data.acknowledged;
                if (inserted) {
                    alert('Yes your data is inserted , thanks')
                }
                else {
                    alert("Sorry sir data isn't inserted , thanks")
                }
            });
        setdata()
    }
    return (
        <div>
            <NavBar></NavBar>
            {/* adding section  */}
            <div className='card-details'>
                <h4 className='text-center text-white'>ADD NEW ITEMS</h4>
                <form onSubmit={onSubmit}>
                    <div className="mb-3 d-md-flex ">
                        {/* items name  */}
                        <input type="text" className="form-control mt-3 mb-md-3 me-md-3" id="exampleFormControlInput1" placeholder="Items Name" name='name' />
                        {/* items price */}
                        <input type="number" className="form-control mt-3 mb-md-3 ms-md-3" id="exampleFormControlInput1" placeholder="price" name='price' />
                    </div>
                    <div className="mb-3 d-md-flex ">
                        {/* items Quntity */}
                        <input type="number" className="form-control mt-3 mb-md-3 me-md-3" id="exampleFormControlInput1" placeholder="Quntity" name='Quntity' />
                        {/* items saplierName */}
                        <input type='text' className="form-control mt-3 mb-md-3 ms-md-3" id="exampleFormControlInput1" placeholder="Saplier Name" name='Sapliername' />
                    </div>
                    <div className="mb-3 ">
                        {/* items Image URL */}
                        <input type="text" className="form-control mt-3" id="exampleFormControlInput1" placeholder="Image URL" name='imgUrl' />
                    </div>
                    <div >
                        {/* items Discription */}
                        <textarea className="form-control mt-3 " id="exampleFormControlTextarea1" placeholder='Discription' rows="2" name='Discription'></textarea>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        {/* button  */}
                        <button type="submit" className='card-button px-5'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;