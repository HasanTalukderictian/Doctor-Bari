import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/logo (2).png';

const NavBar = () => {

    const navItem = <>
        <Link to='/'> <li><a>Home</a></li></Link>
        <Link to='/about'><li><a>About</a></li></Link>
        <Link><li><a>Appointment</a></li></Link>
        <Link> <button className='btn-btn-success'><li><a>Login</a></li></button></Link>
    </>

    return (
        <>
            <div className="navbar bg-base-600 navbar fixed z-10 bg-opacity-30 bg-[#07332F] text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost ">
                           <img  className='w-[120px]' src={logo} alt="" />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                   
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;