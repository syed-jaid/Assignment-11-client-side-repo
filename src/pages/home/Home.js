import React from 'react';
import NavBar from '../navBar/NavBar';
import headerimg from '../../img/header.jpg'
import img1st from '../../img/home-2st.jpg'
import './Home.css';
import Carts from './Cards/Carts';

const Home = () => {
    return (
        <div>
            {/* nav bar part */}
            <NavBar></NavBar>
            {/* header part start */}
            <img className='w-100 h-75 mt-1 mb-4' src={headerimg} alt="" />


            {/* main part or inventory start  */}
            <h1 className='text-center fw-bold'>Inventory </h1>
            <Carts></Carts>

            {/* extra part  */}
            <div className=' home-1st-div'>
                {/* img  */}
                <img className='w-100 homeimg-1st' src={img1st} alt="" />
                {/* discription */}
                <div className=' w-100 img-discription'>
                    <h2 className='fw-bold'>OVERVIEW</h2>
                    <p className='font-monospace'>The development of the Ninja H2®R motorcycle goes beyond the boundaries of any other Kawasaki motorcycle. Born through the unprecedented collaboration between multiple divisions within the Kawasaki Heavy Industries, Ltd. (KHI) organization, the world's only limited production supercharged hypersport model represents the unbridled pinnacle of Kawasaki engineering, with astonishing acceleration and mind-bending top speed suitable only for the track.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;