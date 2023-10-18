import React from 'react';
import Doctor1 from '../../../src/assests/Doctor/Doctor1 (1).png';
import Doctor2 from '../../../src/assests/Doctor/Doctor (2).png';
import Doctor3 from '../../../src/assests/Doctor/Doctor (3).png';
import Doctor4 from '../../../src/assests/Doctor/DOC.jpg';
import Dental from '../../../src/assests/Doctor/Dental.jpg';
import { FaClock, FaPhone, FaSearchLocation, } from 'react-icons/fa';
import Reviews from '../Reviews/Reviews';
import Doctors from '../Doctors/Doctors';
import ContactUs from '../Contact/ContactUs';



const Home = () => {
    return (
        < >

            <div className='lg:flex md:grid bg-[#07332F] '>
                <div className='  mt-20 mx-4 p-8'>
                    <h2 className='text-5xl font-semibol text-white mb-4'>Your Best Medical <br />
                        Help Center</h2>
                    <p className='text-white mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Animi aliquid optio a laborum omnis? Omnis modi
                        <br />quod porro doloribus possimus?</p>
                    <button className="btn btn-secondary mb-4">All Service</button>
                </div>


                <div className='mt-20 mx-4 p-8'>
                    <div className='flex'>
                        <div>   <img className='' src={Doctor1} alt="" /></div>
                        <div>   <img className='' src={Doctor2} alt="" /></div>
                        <div>   <img className='' src={Doctor3} alt="" /></div>

                    </div>
                </div>
            </div>

            <section>
                <div className='mx-12 my-6 px-2'>
                    <div className='lg:flex  md:grid sm:grid'>
                        <div className='w-1/2'>
                            <img className='w-full h-70 rounded' src={Doctor4} alt="" />
                        </div>
                        <div>
                            <h2 className='text-4xl font-semibold '>Our Services</h2>
                            <div className='my-2 mx-8 p-3'>
                                <p className='my-4'>Sed ut perspiciatis unde omnis iste natus error sit <br />
                                    voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                    <br />
                                    eaque ipsa quae ab illo inve ntore veritatis et quasi architecto
                                    <br /> beatae vitae dicta sunt explicabo.</p>
                            </div >
                            <div className='lg:flex md:grid space-x-4'>
                                <button className="btn btn-outline bg-[#F7A582]">Cavity Protection</button>
                                <button className="btn btn-outline btn-primary">Cosmetic Dentisty</button>
                                <button className="btn btn-outline btn-secondary">Oral Surgery</button>
                            </div>

                            <div className='mx-12 mt-4 pl-2'>
                                <img className='rounded mt-4' src={Dental} alt="" />
                            </div>

                            <div className='-my-8'>
                                <h2 className='text-xl font-semibold'>Electro  Gastrology Therapy</h2>
                                <p className='my-2'>Sed ut perspiciatis unde omnis iste natus error <br />
                                    sit voluptatem accusantium doloremque laudantium, <br />
                                    totam rem aperiam, eaque ipsa quae ab illo inve ntore <br />
                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br />
                                    Sed ut perspiciatis unde omnis iste natus error </p>
                                <button className="btn btn-warning">More Details</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='lg:flex md: grid mx-14'>
                    <div className='grid my-4 mr-4 ml-4  '>
                        <div className='w-full flex rounded bg-[#07332F] my-8 mx-4 justify-center rounded'>
                            <div className='my-7 mr-1 ' >
                                <p className='text-2xl w-20 h-30 text-white'><FaClock></FaClock></p>

                            </div>
                            <div className='mr-3'>
                                <h2 className='text-4xl text-white mb-3 mt-4'>Opening Hours</h2>
                                <p className='text-white mb-3'>Open 9.00 am to 5.00pm
                                    <br />Everyday</p>
                            </div>

                        </div>
                    </div>
                    <div className='grid my-4 mr-4 ml-4  '>
                        <div className='w-full flex rounded bg-[#F7A582] space-x-3 my-8 mx-4 justify-center rounded'>
                            <div  className='my-7 mr-1 '>
                                <p className='text-2xl w-20 h-30 text-white'><FaSearchLocation></FaSearchLocation></p>

                            </div>
                            <div className='mr-3'>
                                <h2 className='text-4xl text-white mt-4'>Our Locations</h2>
                                <p className='text-white mb-3'>Dhanmondi 17, Dhaka -1200,
                                    <br /> Bangladesh
                                    <br />Everyday</p>
                            </div>

                        </div>
                    </div>
                    <div className='grid my-4 mr-4 ml-4 '>
                        <div className='w-full flex rounded bg-[#07332F] space-x-3 my-8 mx-4 justify-center rounded'>
                            <div className='my-7 mr-1 ' >
                                <p className='text-2xl w-20 h-30 text-white'><FaPhone></FaPhone></p>

                            </div>
                            <div className='mr-3'>
                                <h2 className='text-4xl text-white mt-4'>Contact Us</h2>
                                <p className='text-white mb-3'>+88 01750 00 00 00 <br />
                                    +88 01750 00 00 00</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Reviews></Reviews>
            </section>
            
            <section>
                <Doctors></Doctors>
            </section>
            <section>
                <ContactUs></ContactUs>
            </section>

        </>
    );
};

export default Home;