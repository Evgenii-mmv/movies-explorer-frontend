import imageSMALL from '../../images/testSMAILL.png';
import galochka from '../../images/Galo4ka.svg';
import krestik from '../../images/Krestik.svg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard() {
  const [isSave, setIsSave] = useState(false);
  const location = useLocation();

  function handleButtonClick() {
    setIsSave(!isSave);
  }

  if (location.pathname === '/movies'){
    return (
    <div className='movies__card'>
      <div className='movies__text'>
        <p className='movies__name'>В погоне за Бенкси</p>
        <p className='movies__time'>27 минут</p>
      </div>
      <img src={imageSMALL} className='movies__image' alt='Обложка фильма'></img>
      <button className={`button movies__button ${isSave ? `movies__button--active` : ``}`}
      onClick={handleButtonClick}>
      <img src={isSave ? galochka : ''} alt=''></img>
      {isSave ? '' : 'Сохранить'}</button>
    </div>
    )
  }
  if(location.pathname === '/saved-movies') {
    return (
      <div className='movies__card'>
        <div className='movies__text'>
           <p className='movies__name'>В погоне за Бенкси</p>
          <p className='movies__time'>27 минут</p>
        </div>
        <img src={imageSMALL} className='movies__image' alt='Обложка фильма'></img>
        <button className='button movies__button'>
        <img src={krestik} alt='крестик'></img>
        </button>
      </div>
    )
  }
}

export default MoviesCard;