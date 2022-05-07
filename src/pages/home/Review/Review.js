import React from 'react';
import parson1 from "../../../img/logo.png";
import star from "../../../img/star.png";
import './Review.css'

const Review = () => {
    return (
        <div className=" row px-3 mb-5  pb-5 mx-0">
            {/* single review card  */}
            <div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                <div className="card-body card mx-auto w-100">
                    <div className="review-single ">
                        {/* review img  */}
                        <div >
                            <img className='review-person ' src={parson1} alt="" />
                        </div>
                        {/* review name  */}
                        <div className='px-2'><span className='person-name m-0 p-0'>Md jahid</span>
                            <br />
                            {/* review discription */}
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod est suscipit dicta aspernatur magni dolorem velit accusantium reiciendis no <small>Date: 2/set.2022</small></div>
                    </div>

                    <div>
                        {/* RATING  */}
                        <p className='mb-0 '>RATING : 5</p>
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                    </div>
                </div>
            </div>

            {/* single review card  */}
            <div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                <div className="card-body card mx-auto w-100">
                    <div className="review-single ">
                        {/* review img  */}
                        <div >
                            <img className='review-person ' src={parson1} alt="" />
                        </div>
                        {/* review name  */}
                        <div className='px-2'><span className='person-name m-0 p-0'>Md jahid</span>
                            <br />
                            {/* review discription */}
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod est suscipit dicta aspernatur magni dolorem velit accusantium reiciendis no <small>Date: 2/set.2022</small></div>
                    </div>

                    <div>
                        {/* RATING  */}
                        <p className='mb-0 '>RATING : 5</p>
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                    </div>
                </div>
            </div>

            {/* single review card  */}
            <div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                <div className="card-body card mx-auto w-100">
                    <div className="review-single ">
                        {/* review img  */}
                        <div >
                            <img className='review-person ' src={parson1} alt="" />
                        </div>
                        {/* review name  */}
                        <div className='px-2'><span className='person-name m-0 p-0'>Md jahid</span>
                            <br />
                            {/* review discription */}
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod est suscipit dicta aspernatur magni dolorem velit accusantium reiciendis no <small>Date: 2/set.2022</small></div>
                    </div>

                    <div>
                        {/* RATING  */}
                        <p className='mb-0 '>RATING : 5</p>
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                    </div>
                </div>
            </div>

            {/* single review card  */}
            <div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                <div className="card-body card mx-auto w-100">
                    <div className="review-single ">
                        {/* review img  */}
                        <div >
                            <img className='review-person ' src={parson1} alt="" />
                        </div>
                        {/* review name  */}
                        <div className='px-2'><span className='person-name m-0 p-0'>Md jahid</span>
                            <br />
                            {/* review discription */}
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod est suscipit dicta aspernatur magni dolorem velit accusantium reiciendis no <small>Date: 2/set.2022</small></div>
                    </div>

                    <div>
                        {/* RATING  */}
                        <p className='mb-0 '>RATING : 5</p>
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                        <img className='icon-star' src={star} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;