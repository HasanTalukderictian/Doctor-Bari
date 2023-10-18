import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import Rating from 'react-rating';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';





const Reviews = () => {


    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



    return (
        <div>

            <div className=' lg:grid md:grid my-4 justify-center items-center mb-3'>
                <h2 className='text-3xl font-semibold text-center mb-3'>What Our Patients Says</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa</p>
                <p className='text-center my-1'>quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <Swiper cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation]}
                className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                        review={review}>
                        <div className=' card w-full space-x-4 bg-base-300 shadow-xl mt-4 '>

                            <div className='mx-3 my-2 p-2 flex flex-col items-center mx-24 my-16'>
                                <Rating style={{ maxWidth: 250 }} value={review.rating} readOnly />
                                 
                                <p className='mt-4'>{review.details}</p>
                                <h3 className='text-2xl text-orange-400 mb-2'> {review.name}</h3>
                            </div>
                        </div>

                    </SwiperSlide>)
                }


            </Swiper>


        </div>
    );
};

export default Reviews;