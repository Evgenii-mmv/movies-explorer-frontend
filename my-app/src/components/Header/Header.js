import React from "react";
import headerLogo from '../../images/logo.svg';
import Navigathion from '../Navigathion/Navigathion';
import { Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';


function Header(props) {
  const location = useLocation()
  return (
    <header className={`header ${location.pathname !=='/' ? `header--dark` : ``}`}>
      <Link to='/' className=""><img src={headerLogo} alt="Лого" className="header__logo link" onClick={props.disableLogged}/></Link>
      <Navigathion />
    </header>
  )
}

export default Header;