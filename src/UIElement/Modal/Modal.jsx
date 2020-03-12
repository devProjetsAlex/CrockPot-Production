import React from 'react'

import ReactDOM from 'react-dom'
import {CSSTransition} from 'react-transition-group'
import Backdrop from '../../Navigation/Backdrop/Backdrop'


import './Modal.css'

const ModalOverlay = props => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>
                    {props.header}
                </h2>                
            </header>
                    {/*Nous créons ici bas une div FORM qui permettra au modal d'accepté les 3inputs <h2></h2> <div></div> et 
                    <footer></footer>. l'avantage est de pouvoir mettre la form dans la première div et les boutton
                     dans le footer. ainsi notre style est beaucoup plus facie a rendre sur toute les écrans différent  ++ si nous
                     voulons ajouté input, créer une nouvelle div acceptant {props.children} les props en classname
                     sont présentement seulement la pour pouvoir modifié le styles et le premier props est dans le fichié modal.css*/}
            <form onSubmit={
                props.onSubmit ? props.onSubmit: event => event.preventDefault()
            } >
                 <div className={`modal__content ${props.contentClass}`}>
                      {props.children} 
                      </div>

                 <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}     
                 </footer>
            </form>
        </div>
    )
    return ReactDOM.createPortal(content,document.getElementById('modal-hook'))
}

const Modal = props => {
    return (<>
        {props.show && <Backdrop onClick={props.onCancel}/>}
        <CSSTransition
        in= {props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={'modal'}
        > 
            <ModalOverlay {...props}/>
        </CSSTransition>
    </>)

}

export default Modal