import { Router, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';

function NotFoundPage() {
  let navigate = useNavigate();

  function Back(){
    navigate(-1);
  }
  return (
    <section className='page-not-found'>
      <div className='page-not-found__container'>
        <h1 className='page-not-found__title'>404</h1>
        <p className='page-not-found__subtitle'>Страница не найдена</p>
        <p onClick={Back} className='page-not-found__back-link link'>Назад</p>
      </div>
    </section>
  )
}

export default NotFoundPage;