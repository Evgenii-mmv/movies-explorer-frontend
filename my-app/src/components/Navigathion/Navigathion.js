import { Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import profileIcon from '../../images/icon__COLOR_icon-main.svg';
import { useState } from 'react';

function Navigathion() {
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
      <div className='header__links-container'>
        <nav className='header__links--dark'>
        <Link className='header__link-movie--dark link' to='/movies'>Фильмы</Link>
        <Link className='header__link--dark link' to='/saved-movies'>Сохранённые фильмы</Link>
        </nav>
      <nav className='header__profile-container'>
        <Link className='header__profile-link link' to='/profile'>Аккаунт</Link>
        <div className='header__image-container'>
          <img className='header__profile-image' src={profileIcon} alt='Icon account'></img>
         </div>
      </nav>
      </div>
    )
  }
}

export default Navigathion;