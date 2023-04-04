import React, { useState } from 'react';
import headerLogo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';

function Login(props) {

  const {
    register,
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    let  { email, password } = data;
    props.onLogin( email, password );
    reset();
  }

  return (
    <section className='login'>
      <div className='login__top'>
      <Link to='/'><img src={headerLogo} alt='логотип' className='link'></img></Link>
      <h1 className='login__title'>Рады видеть!</h1>
      </div>
      <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
        <label>
        <p className='login__form-name' >E-mail</p>
          <input
          className={`login__input ${errors?.email ? `error__input` : ``}`}
          placeholder='Ваш E-mail'
          {...register('email', {
            required: "Поле обязательно к заполнению!",
            pattern: {
              value: /^[a-zA-Zа-яА-Я0-9]+(?:[._-][a-zA-Zа-яА-Я0-9]+)*@(?:gmail.com|mail.ru)$/,
              message: "Невалидный e-mail"
            },
          }
          )}
           />
        </label>
        {errors?.email && <div><p className='error'>{errors?.email?.message}</p></div>}
        <label>
          <p
          className='login__form-name' >Пароль</p>
          <input
          className={`login__input ${errors?.password ? `error__input` : ``}`}
          placeholder='Введите пароль'
          type="password"
          {...register('password', {
            required: "Поле обязательно к заполнению!",
          }
          )}
          />
        </label>
        {errors?.password && <div><p className='error'>{errors?.password?.message}</p></div>}
        <div className='login__bot'>
        <button type="submit" className='login__button button' disabled={!isValid}>Войти</button>
        <p className='login__question'>Ещё не зарегистрированы?  <Link to='/signup' className='link login__link'>Регистрация</Link></p>
        </div>
        </form>
    </section>
    )
}

export default Login;