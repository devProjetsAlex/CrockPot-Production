import React from 'react'

import './Layout.styles.css'
import Toolbar from '../Toolbar/Toolbar.component'


const layout = (props) => {
    return (
    <>

        <Toolbar />
       <main className='Content'>
            {props.children}
        </main>
    </>)
}

export default layout