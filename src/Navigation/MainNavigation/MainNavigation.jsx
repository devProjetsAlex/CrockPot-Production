import React, { useState } from 'react'

import Backdrop from '../Backdrop/Backdrop'
import NavLinks from '../NavLinks/NavLinks'

import './MainNavigation.css'

import SideDrawer from '../SideDrawer/SideDrawer'
import MainHeader from '../MainHeader/MainHeader'

const MainNavigation = props => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

const openDrawer = () => {
    setDrawerIsOpen(true)
}

const closeDrawer = () => {
    setDrawerIsOpen(false)
}
    return(
        <>
        {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
        
        <SideDrawer onClick={closeDrawer} show={drawerIsOpen} >
            <div className='main-navigation__drawer-nav'>
            <NavLinks />
            </div>
        </SideDrawer>
        
        <MainHeader>
            <button className='main-navigation__menu-btn' onClick={openDrawer}>
                    <span/>
                    <span/>
                    <span/>
            </button>
            <h1 className='main-navigation__title'>  
             
            </h1>
            <nav className='main-navigation__header-nav'>
                <NavLinks/>
            </nav>
        </MainHeader>
        </>
    )
}
export default MainNavigation
