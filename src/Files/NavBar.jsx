import React from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <div className='navbar'>
            <nav>
                <img src={logo} width="150px" height="35px"/>
                <div className='nav-menu'>
                    <div className='nav-menu-links'>
                        <Link className='nav-link'>
                            <div>Services</div>
                        </Link>
                        <Link className='nav-link'>
                            <div>Recipes</div>
                        </Link>
                        <Link className='nav-link'>
                            <div>Reserves Now</div>
                        </Link>
                    </div>
                    <div className='nav-icons'>
                        <Link><i class="fa-brands fa-facebook"></i></Link>
                        <Link><i class="fa-brands fa-twitter"></i></Link>
                        <Link><i class="fa-brands fa-instagram"></i></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
