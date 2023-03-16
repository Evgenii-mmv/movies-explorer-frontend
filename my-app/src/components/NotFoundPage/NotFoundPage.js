import { Router, Routes, Route, Link, NavLink } from 'react-router-dom';

function NotFoundPage() {

  return (
    <section className='page-not-found'>
      <div className='page-not-found__container'>
        <h1 className='page-not-found__title'>404</h1>
        <p className='page-not-found__subtitle'>Страница не найдена</p>
        <Link className='page-not-found__back-link link' to='/'>Назад</Link>
      </div>
    </section>
  )
}

export default NotFoundPage;