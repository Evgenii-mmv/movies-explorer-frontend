import myphoto from '../../images/Myphoto.png';
import Portfolio from '../Portfolio/Portfolio';
function AboutMe() {

  return (
    <section className='aboutme'>
      <h1 className='aboutme__topic'>Студент</h1>
      <div className='aboutme__box'>
        <img className='aboutme__photo' src={myphoto} alt='Фото студента'></img>
        <div className='aboutme__text'>
          <p className='aboutme__name'>Виталий</p>
          <p className='aboutme__info'>Фронтенд-разработчик, 30 лет</p>
          <p className='aboutme__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <p className='aboutme__git'>Github</p>
        </div>
      </div>
       <Portfolio/>
    </section>
    )
}

export default AboutMe;