import React, { useState } from 'react'
import "./Nav.css"
import LOGO from "./img/logo.png"

function Nav() {
const [show, handleShow]=useState(false);

const transitionNavBar = () => {
    if (window.scroll>100){
        handleShow(true)
    }else{
        handleShow(false)
    }
}

    return (
        <div className="nav nav__black">
            <div className="nav__contents" >
            <img className="nav__logo" src={LOGO} alt="netflix" />
            <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
          
            </div>
           
        </div>
    )
}

export default Nav
