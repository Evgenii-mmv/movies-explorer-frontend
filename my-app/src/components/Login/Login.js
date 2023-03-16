import React, { useState } from 'react';
import headerLogo from '../../images/logo.svg';
import { Router, Routes, Route, Link, NavLink } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(` Last name: ${email}, Middle name: ${password}`);
  }

  return (
    <section className='login'>

      <div className='login__top'>
      <Link to='/'><img src={headerLogo} alt='логотип' className='link'></img></Link>
      <h1 className='login__title'>Рады видеть!</h1>
      </div>
      <fieldset className='login__form' onSubmit={handleSubmit}>
        <label>
        <p className='login__form-name' >E-mail</p>
          <input
          className='login__input login__input_type_email'
          id='email-input'
          type="text"
          value={email}
          name='email'
          required
          onChange={handleEmailChange}
           />
        </label>
        <label>
          <p
          className='login__form-name' >Пароль</p>
          <input
          className='login__input login__input_type_password'
          id='password-input'
          type="password"
          value={password}
          name='password'
          required
          onChange={handlePasswordChange}
          />
        </label>
        </fieldset>
        <div className='login__bot'>
        <Link to='/movies'><button type="submit" className='login__button button' onClick={props.setLogged}>Войти</button></Link>
        <p className='login__question'>Ещё не зарегистрированы?  <Link to='/signup' className='link login__link'>Регистрация</Link></p>

        </div>
    </section>
    )
}

export default Login;