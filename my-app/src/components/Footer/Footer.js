import { Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation()

  return (
    <footer className={`footer ${location.pathname ==='/profile' ? `footer__hide` : ``}`}>
    <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
    <div className="footer__copyright">
      <p className='footer__data footer__data-year'>©2023</p>
      <div className='footer__links'>
        <p className='footer__data'>Яндекс.Практикум</p>
        <p className='footer__data'>Github</p>
      </div>
    </div>
  </footer>
    )
}

export default Footer;