import React from 'react';
import { Icon } from '@iconify/react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-5 p-3">
            <div className="container">
                <span className="navbar-brand mb-0 h1">MyApp</span>
                {/* <Icon icon="bi:moon" />
                <Icon icon="bi:moon-fill" /> */}
                <button className='btn d-flex align-items-center button-switch-mode'>
                    <Icon className='me-1' icon="bi:moon" />
                    Dark Mode
                </button>
            </div>
        </nav>
    );
}
 
export default Navbar;