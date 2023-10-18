import React from 'react';
import { Link } from 'react-router-dom';

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
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">DOC House</a>
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