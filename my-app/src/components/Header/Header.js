import React from "react";
import headerLogo from '../../images/logo.svg';
import Navigathion from '../Navigathion/Navigathion';
import { Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Header(props) {

  const [isOpen, setIsOpem] = useState(false);

  function handleButtonClick() {
    setIsOpem(!isOpen);
  }
  const location = useLocation()
  return (
    <header className={`header ${location.pathname !=='/' ? `header--dark` : ``} ${isOpen ? `open` : ``}`}>
      <Link to='/' className=""><img src={headerLogo} alt="Лого" className="header__logo link" onClick={props.disableLogged}/></Link>
      <Navigathion handleButtonClick={handleButtonClick}/>
    </header>
  )
}

export default Header;