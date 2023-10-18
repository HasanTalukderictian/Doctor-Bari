import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import call from '../../../src/assests/call.png';
import loc from '../../../src/assests/loc1.png';
import DatePicker from "react-datepicker";

const ContactUs = () => {
    
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className=' rounded bg-[#07332F] flex mb-6'>

            <div className='my-6 mx-4 p-8 text-white'>
                <h3 className='text-3xl font-semibold mt-4 mb-4 px-4'>Contact With Us</h3>
                <p className='px-4 mt-2'>Sed ut perspiciatis unde omnis iste natus error
                    <br />
                    sit voluptatem accusantium doloremque laudantium,
                    <br />
                    totam rem aperiam, eaque ipsa quae ab
                    <br /> illo inve ntore veritatis et quasi.</p>
                <div className='flex space-x-3 mt-3 mx-auto'>
                    <img className='w-[30px]' src={call} alt="" />
                    <p>+8801768712230</p>
                </div>
                <div className='flex space-x-3 mt-3 mx-auto'>
                    <img className='w-[30px] ' src={loc} alt="" />
                    <p>Dhanmondi, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div>
                <form>
                  
                   <div className="form-control w-full max-w-2xs my-6 p-8">
                   <div className='flex space-x-5 mt-2'>
                       <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                       <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                     
                   </div>
                   <div className='flex space-x-5 my-3 '>
                       <input type="number" placeholder="Mobile Number" className="input input-bordered w-full max-w-xs" />
                       <input type="text" placeholder="Doctor Name" className="input input-bordered w-full max-w-xs" />
                     
                   </div>
                   <div className='flex space-x-5 '>
                       <input type="text" placeholder="Date" 
                       className="input input-bordered w-full max-w-xs" />
                       <input type="number" placeholder="Time" className="input input-bordered w-full max-w-xs" />
                     
                   </div>
                   <div className='flex space-x-5 my-2 justify-center '>
                       
                       <button className="btn btn-outline bg-[#F7A582] input input-bordered w-full max-w-xs">Book Now</button>
                     
                   </div>
                   </div>
                   
                </form>
            </div>
        </div>
    );
};

export default ContactUs;