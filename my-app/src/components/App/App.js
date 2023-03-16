import { Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Registration from '../Registration/Registration';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function App() {
 //
//  fetch('https://api.nomoreparties.co/beatfilm-movies')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
  const location = useLocation();
  const [cards, setCards] = useState([]);
  // const [currentUser, setCurrentUser] = useState({});
  const [hideFootHead, setHideFootHead] = useState(true);
  const [login, setLogin] = useState(false);

  // useEffect(() => {
  //   if (location.pathname === '/movies')
  //   {
  //     fetch('https://api.nomoreparties.co/beatfilm-movies')
  //       .then(response => response.json())
  //       .then(data => setCards(data))
  //       .then(data => console.log(cards))
  //       .catch(error => console.error(error));
  //   }
  // }, [location]);
  useEffect(() => {
    if(
      location.pathname === '/' || location.pathname === '/movies'
      || location.pathname === '/saved-movies'
      || location.pathname === '/profile'
      )
    {
      setHideFootHead(false);
    }else{
      setHideFootHead(true);
    }
  }, [location]);

  function setLogged() {
    setLogin(true);
  }

  function disableLogged() {
    setLogin(false);
  }

  return (
  <div className='page'>
    <div className='page__wrapper'>
      {!hideFootHead && <Header withoutLogin login={login} disableLogged={disableLogged}/>}
        <Routes>
          <Route path='/' element={ <Main/> } />
          <Route path='*' element={ <NotFoundPage/> } />
          <Route path='/signup' element={ <Registration/> } />
          <Route path='/signin' element={ <Login setLogged={setLogged}/> } />
          <Route path='/movies' element={ <Movies/> } />
          <Route path='/saved-movies' element={ <SavedMovies/> } />
          <Route path='/profile' element={ <Profile/> } />
        </Routes>
      {!hideFootHead && <Footer />}
    </div>
  </div>
  )
}

export default App;
