import React, { useState } from 'react';
import headerLogo from '../../images/logo.svg';
import { Router, Routes, Route, Link, NavLink } from 'react-router-dom';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`First name: ${name}, Last name: ${email}, Middle name: ${password}`);
  }

  return (
    <section className='registration'>

      <div className='registration__top'>
      <Link to='/'><img src={headerLogo} alt='логотип' className='link'></img></Link>
      <h1 className='registration__title'>Добро пожаловать!</h1>
      </div>
      <fieldset className='registration__form' onSubmit={handleSubmit}>
        <label>
          <p className='registration__form-name' >Имя</p>
          <input
          className='registration__input registration__input_type_name'
          id='name-input'
          type="text"
          value={name}
          name='name'
          placeholder='Вашe имя'
          required
          onChange={handleNameChange}
          />
        </label>
        <label>
        <p className='registration__form-name' >E-mail</p>
          <input
          className='registration__input registration__input_type_email'
          id='email-input'
          type="text"
          value={email}
          name='email'
          placeholder='Ваш E-mail'
          required
          onChange={handleEmailChange}
           />
        </label>
        <label>
          <p
          className='registration__form-name' >Пароль</p>
          <input
          className='registration__input registration__input_type_password'
          id='password-input'
          type="password"
          value={password}
          name='password'
          placeholder='Придумайте пароль'
          required
          onChange={handlePasswordChange}
          />
        </label>
        </fieldset>
        <div className='registration__bot'>
        <Link to='dsadsa'><button type="submit" className='registration__button button' >Зарегистрироваться</button></Link>
        <p className='registration__question'>Уже зарегистрированы?  <Link to='/signin' className='link registration__link'>Войти</Link></p>

        </div>
    </section>
    )
}

export default Registration;