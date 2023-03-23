import { Routes, Route, Navigate, useNavigate  } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Registration from '../Registration/Registration';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../context/context';
import auth from '../../utils/Auth';
import api from '../../utils/MainApi';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PrivateRoute from '../../utils/PrivateRoute/PrivateRoute';

function App() {
//  fetch('https://api.nomoreparties.co/beatfilm-movies')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
  const location = useLocation();
  let navigate = useNavigate();
  const [hideFootHead, setHideFootHead] = useState(true);
  const [login, setLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const token = localStorage.getItem("jwt");
  const [loggedIn, setLoggedIn] = useState(token ? true : false);
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
    const token = localStorage.getItem("jwt");
    if(token)
    {
      api.updateToken(token);
      api.getUser()
        .then((data) => {
          if (data) {
            setCurrentUser(data);
          }
        })
        .catch((err) => console.log(err))
    }
  }, [loggedIn]);

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

  function onRegister (username, email, password) {
    auth.setRegisterUser( username, email, password )
      .then((data) => {
        setCurrentUser(data);
        console.log(data.name)
        onLogin(data.email, password)
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function onLogin ( email, password ) {
    return auth.setAuthorizeUser( email, password )
      .then(() => {
        setLogged(true);
        navigate('/movies');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function updateProfile ( name, email) {
    console.log(name);
    return api.updateUser( name, email )
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function setLogged() {
    setLoggedIn(true);
  }

  function disableLogged() {
    setLoggedIn(false);
  }

  return (
  <CurrentUserContext.Provider value={currentUser} >
    <div className='page'>
      <div className='page__wrapper'>
          {!hideFootHead && <Header  login={login} />}
          <main>
            <Routes>
              <Route element={<PrivateRoute login={loggedIn} />}>
                <Route path='/movies' element={ <Movies /> } />
                <Route path='/saved-movies' element={ <SavedMovies /> } />
                <Route path='/profile' element={ <Profile disableLogged={disableLogged} updateProfile={updateProfile} setCurrentUser={setCurrentUser}/> } />
              </Route>
              <Route path='/' element={ <Main /> } />
              <Route path='*' element={ <NotFoundPage /> } />
              <Route path='/signup' element={ <Registration onRegister={onRegister}/> } />
              <Route path='/signin' element={ <Login onLogin={onLogin}/> } />
            </Routes>
          </main>
          {!hideFootHead && <Footer />}
      </div>
    </div>
  </CurrentUserContext.Provider>
  )
}

export default App;
