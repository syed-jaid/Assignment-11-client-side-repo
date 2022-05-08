import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../img/logo.png';
import './NavBar.css'
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const NavBar = () => {
    const user = useAuthState(auth)
    const naviget = useLocation()
    const navgaiteValue = naviget.pathname;
    return (
        <div>
            <nav className="navbar navbar-light ">
                <div className="container-fluid">
                    {/* navbar logo part*/}
                    <div className='logo-div d-flex flex-column ms-3'>
                        {/* navbar logo img  */}
                        <img className='logo-div nav-logo ms-1 pb-0' src={logo} alt="" />
                        {/* navbar logo text  */}
                        <small className='logo-div text-white p-0 m-0'>kawame</small>
                    </div>
                    {/* nav route links  */}
                    <div className='nav-rout-links '>
                        <Link className='nav-rout-link' to='/'>Home</Link>
                        <Link className='nav-rout-link' to='/manageInventories'>Manage Items</Link>
                        {
                            user[0] ? <span><Link className='nav-rout-link' to='/addItems'>Add Item</Link>
                                <Link className='nav-rout-link' to='/myItems'>My items</Link></span> : ''
                        }
                        <Link className='nav-rout-link' to='/blog'>Blog</Link>
                    </div>
                    {/* navbar sign in and sign out */}
                    <div className='sign-div-btn'>

                        {/* signIn
                        
                         */}
                        {/* signOut  */}
                        {
                            user[0] ? <button className='sign-out-btn font-monospace' onClick={() => signOut(auth)}>Sign Out</button> : <div className='mt-2'>
                                {
                                    navgaiteValue === '/Registor' ? <Link to='/Registor'><button className='sign-out-btn font-monospace'>Registor</button></Link> : ''
                                }
                                {
                                    navgaiteValue === '/login' ? <Link to='/login'><button className='sign-out-btn font-monospace'>Log In</button></Link> : ''
                                }
                                {
                                    navgaiteValue === '/' || navgaiteValue === '/manageInventories' || navgaiteValue === '/blog' ? <Link to='/Registor'><button className='sign-out-btn font-monospace'>Registor</button></Link> : ''
                                }

                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;