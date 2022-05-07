import React from 'react';
import NavBar from '../navBar/NavBar';

const AddItems = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* adding section  */}
            <div className='card-details'>
                <h4 className='text-center text-white'>ADD NEW ITEMS</h4>
                <div className="mb-3 d-md-flex ">
                    {/* items name  */}
                    <input type="email" className="form-control mt-3 mb-md-3 me-md-3" id="exampleFormControlInput1" placeholder="Items Name" />
                    {/* items price */}
                    <input type="email" className="form-control mt-3 mb-md-3 ms-md-3" id="exampleFormControlInput1" placeholder="price" />
                </div>
                <div className="mb-3 d-md-flex ">
                    {/* items Quntity */}
                    <input type="email" className="form-control mt-3 mb-md-3 me-md-3" id="exampleFormControlInput1" placeholder="Quntity" />
                    {/* items date */}
                    <input type="email" className="form-control mt-3 mb-md-3 ms-md-3" id="exampleFormControlInput1" placeholder="date" />
                </div>
                <div className="mb-3 ">
                    {/* items Image URL */}
                    <input type="email" className="form-control mt-3" id="exampleFormControlInput1" placeholder="Image URL" />
                </div>
                <div >
                    {/* items Discription */}
                    <textarea className="form-control mt-3 " id="exampleFormControlTextarea1" placeholder='Discription' rows="2" ></textarea>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    {/* button  */}
                    <input type="button" className='card-button px-5' value="Form  Submit" />
                </div>
            </div>
        </div>
    );
};

export default AddItems;