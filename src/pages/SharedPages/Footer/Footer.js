import React from 'react';
import logo from '../../../assests/logo (2).png';
const Footer = () => {
    const d = new Date();
   const year = d.getFullYear();
    return (
        <footer className=''>
            <div className="footer p-10 bg-base-200 bg-slate-400 text-base-content">
                <aside>
                    <img className='w-[120px]' src={logo}></img>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                    <button className="btn btn-outline btn-accent">Appointment</button>
                </aside>
                <nav>
                    <header className="footer-title">Quick Links</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Doctors</a>
                    <a className="link link-hover">Online Payments</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">My Account</a>
                </nav>
                <nav>
                    <header className="footer-title">Doc House Services</header>
                    <a className="link link-hover">Pediatric Clinic</a>
                    <a className="link link-hover">Diagnosis Clinic</a>
                    <a className="link link-hover">Cardiac Clinic</a>
                    <a className="link link-hover">Laboratory Analysis</a>
                    <a className="link link-hover">Gynecological Clinic</a>
                    <a className="link link-hover">Personal Counseling</a>
                    <a className="link link-hover">Dental Clinic</a>
                </nav>
                <nav>
                    <header className="footer-title">Working Hours</header>
                    <a className="link link-hover">Monday - 10 am to 7 pm</a>
                    <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                    <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
                    <a className="link link-hover">Thursday - 10 am to 7 pm</a>
                    <a className="link link-hover">Friday - 10 am to 7 pm</a>
                    <a className="link link-hover">Saturday - 10 am to 7 pm</a>
                    <a className="link link-hover">Sunday - 10 am to 7 pm</a>
                </nav>

            </div>
            <div className=" p-4 bg-base-300 bg-slate-500 text-base-content">
                <aside>
                    <p className='text-center text-white'>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </footer>

    );
};

export default Footer;