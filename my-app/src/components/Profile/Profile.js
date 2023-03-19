import { Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';

function Profile() {

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
        <fieldset className='profile__form' >
        <label className='profile__text-container'>
        <p className='profile__input-name profile__input-name--name' >Имя</p>
          <input
          className=' profile__input profile__input--name'
          id='name-input'
          type="text"
          placeholder='Вашe новое имя'
          name='name'
          />
        </label>
        <label className='profile__text-container'>
        <p className=' profile__input-name profile__input-name--email' >Е-mail</p>
          <input
          className='profile__input profile__input--email'
          id='email-input'
          placeholder='Ваш новый E-mail'
          type="text"
          name='email'
          />
        </label>
        </fieldset>
        <button className='button profile__button'>Редактировать</button>
        <Link to='/' className='profile__link link'>Выйти из аккаунта</Link>
    </section>

    )
}

export default Profile;