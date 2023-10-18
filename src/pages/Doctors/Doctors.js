import React, { useEffect, useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import Rating from 'react-rating';
import loc from '../../../src/assests/loc1.png';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    
    useEffect(()=>{
        fetch('doctor.json')
        .then(res => res.json())
        .then(data =>{
            setDoctors(data)
        });
    },[])

    return (
        <div  >
              <div className='grid my-4 justify-center items-center mb-3'>
                <h2 className='text-3xl font-semibold text-center mb-3'>Our Expert Doctors</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </p>
                <p className='text-center my-1'>quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
           <div className='flex space-x-4 mb-4'>
           {
                doctors.map(item => <div 
                       key={item._id}
                       item={item} className='card w-full space-x-4 bg-base-300' >  

                             <div className='rounded my-2 mx-2 p-2'>
                             <img className='rounded w-[340px] h-[200px]' src={item.img} alt="" />
                             </div>
                          <h2 className='text-xl font-semibold'>{item.name}</h2>
                          <p className='font-semibold'> BTP- {item.specialist}</p>
                          <div className='flex space-x-4'>
                            <Rating  className="far fa-star" style={{ maxWidth: 250 , color: 'red' }} initialRating={4} readOnly />
                          <p>{item.rating}</p></div>

                          <div className='my-3'>
                          <p>Gender: {item.gender}</p>
                            <div className='flex space-x-2'>
                            <img src={loc}  className='w-[20px] 'alt="" />   
                            <p>{item.location}</p> 
                            </div>
                          <p className='text-red-500'>price : {item.price}</p>
                           <div className='justify-center text-center mt-3'>
                           <button className="btn btn-outline btn-warning">View Profile</button>
                           </div>
                          </div>
                        </div>)
            }
           </div>
        </div>
    );
};

export default Doctors;