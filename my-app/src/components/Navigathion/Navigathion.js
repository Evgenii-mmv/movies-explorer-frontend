import { Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import profileIcon from '../../images/icon__COLOR_icon-main.svg';
import { useState } from 'react';

function Navigathion(props) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  if (location.pathname === '/') {
    return (
      <nav className='header__links'>
        <Link className='header__link link' to='/signup'>Регистрация</Link>
        <button className='header__button button'><Link to='/signin' className='header__link link header__link--type-button' href='#'>Войти</Link></button>
      </nav>
      )
  }else{
    return (
    <>
    <div className='header__overlay'>
    </div>
      <div className='header__links-container'>
        <nav className='header__links--dark'>
        <NavLink className='header__link-home link' to='/'>Главная</NavLink>
        <NavLink className='header__link-movie--dark link' to='/movies'>Фильмы</NavLink>
        <NavLink className='header__link--dark link' to='/saved-movies'>Сохранённые фильмы</NavLink>
        </nav>
      <nav className='header__profile-container'>
        <NavLink className='header__profile-link link' to='/profile'>Аккаунт</NavLink>
        <div className='header__image-container'>
          <img className='header__profile-image' src={profileIcon} alt='Icon account'></img>
         </div>
      </nav>
      </div>
        <button className='header__burger-button button' onClick={props.handleButtonClick}>
            <span></span>
            <span></span>
            <span></span>
        </button>

    </>
    )
  }
}

export default Navigathion;