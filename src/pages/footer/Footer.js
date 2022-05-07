import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-main-div mt-5'>
            <div className="container ">
                <footer className="text-center text-lg-start border border-white mt-md-5 pt-4">
                    {/* <!-- FULL container --> */}
                    <div className="container">
                        <div className="row">
                            {/* <!--1ST PART--> */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-white mb-4">ABOUT US</h5>

                                <ul className="list-unstyled mb-4">
                                    <li>
                                        <Link to='/' className="text-white">About cp</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className="text-white">Collections</Link>
                                    </li>

                                </ul>
                            </div>
                            {/* <!--2ST PART--> */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-white mb-4">Assistance</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <Link to='/' className="text-white">Contact us</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className="text-white">Size Guide</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--3ST PART--> */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-white mb-4">Help</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <h6 className="text-white">Contect us : +344638 </h6>
                                    </li>
                                </ul>
                            </div>

                            {/* sing up part */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-white mb-4">Sign up </h5>

                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="form5Example2" className="form-control" />
                                    <label className="form-label text-white" for="form5Example2" >Email address</label>
                                </div>

                                <button type="submit" className="btn btn-outline-white btn-block">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    {/*Copyright*/}
                    <div className="text-center p-3 border-top border-white text-white">
                        © 2020 Copyright:
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default Footer;