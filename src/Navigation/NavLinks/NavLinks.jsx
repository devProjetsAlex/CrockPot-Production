import React from 'react'
import { NavLink } from 'react-router-dom'
import {ReactComponent as Logo} from '../../asset/image/logo.svg'
import {LogoContainer, HeaderContainer} from '../../component/LogoContainer/LogoContainer' 

import './NavLinks.css'

const NavLinks = props => {
    return (
        <ul className='nav-links'>
            <li >
            <LogoContainer className='logo-container'  to='/'> 
                <Logo className='logo'/>
            </LogoContainer>
            </li>
            <li>
                <NavLink to='/accueil'>
                    Accueil
                </NavLink>
            </li>
            <li>
                <NavLink  to="/mixologie">
                    Mixologie
                </NavLink>
            </li>
            <li>
                <NavLink   to="/menu">
                    Menu
                </NavLink>
            </li>
            <li>
                <NavLink to="/reservation">
                    Reservation
                </NavLink>
            </li>



        </ul>

    )
}

export default NavLinks
