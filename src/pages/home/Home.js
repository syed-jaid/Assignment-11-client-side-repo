import React from 'react';
import NavBar from '../navBar/NavBar';
import headerimg from '../../img/header.jpg'
import img1st from '../../img/jahid.jpg'
import './Home.css';
import Carts from './Cards/Carts';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import Review from './Review/Review';

const Home = () => {
    return (
        <div >
            {/* nav bar part */}
            <NavBar></NavBar>
            {/* header part start */}
            <img className=' h-50 w-100 mt-1 mb-4 ' src={headerimg} alt="" />

            <h1 className='text-center fw-bold mt-5 pt-5'>THE BEST BICKS IN THE WORLD</h1>
            {/* extra part  */}
            <div className=' home-1st-div'>
                {/* img  */}
                <img className='w-100 homeimg-1st' src={img1st} alt="" />
                {/* discription */}
                <div className=' w-100 img-discription'>
                    <h2 className='fw-bold'>OVERVIEW</h2>
                    <p className='font-monospace'>The development of the Ninja H2®R motorcycle goes beyond the boundaries of any other Kawasaki motorcycle. Born through the unprecedented collaboration between multiple divisions within the Kawasaki Heavy Industries, Ltd. (KHI) organization, the world's only limited production supercharged hypersport model represents the unbridled pinnacle of Kawasaki engineering, with astonishing acceleration and mind-bending top speed suitable only for the track.as</p>
                    <button className='card-button'>READ MORE</button>
                </div>
            </div>

            {/* main part or inventory start  */}
            <h1 className='text-center fw-bold mt-5'>Inventory </h1>

            {/* all cards  */}
            <Carts></Carts>

            {/*Manage all inventory items link */}
            <div className='d-flex justify-content-center'>
                <Link to='/manageInventories' className='card-button mb-4'>Manage Inventories</Link>
            </div>


            {/* Review part start  */}
            <h1 className='text-center fw-bold mt-5'>REVIEWS </h1>
            <Review></Review>

            {/* footer start  */}
            <Footer></Footer>
        </div>
    );
};

export default Home;