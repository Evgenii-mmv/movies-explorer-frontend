import { Router, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import PromoLogo from '../../images/text__COLOR_landing-logo.png';
import { scroller } from 'react-scroll';

function Promo() {

  function handleClick(event) {
    event.preventDefault();
    scroller.scrollTo('project', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 100,
    });

  }

  return (
    <section className='promo'>
      <div className='promo__info'>
        <img src={PromoLogo} alt="Промо" className='promo__image'></img>
        <div className='promo__text'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className='promo__button button'><Link to='#project' onClick={handleClick} className='promo__link link'>Узнать больше</Link></button>
        </div>
      </div>
    </section>
  )
}

export default Promo;