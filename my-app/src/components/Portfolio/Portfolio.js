
import strelka from '../../images/Strelka_link.svg';
function Portfolio() {

  return (
    <section className='portfolio'>
      <h1 className='portfolio__topic'>Портфолио</h1>
      <div className='portfolio__links'>
        <div className='portfolio__linkbox'>
          <p className='portfolio__site'>Статичный сайт</p>
          <a className='portfolio__link link' href='#'>
            <img src={strelka} className='portfolio__imagelink link' alt='стрелка,которая является ссылкой'></img>
          </a>
        </div>
        <div className='portfolio__linkbox'>
          <p className='portfolio__site'>Адаптивный сайт</p>
          <a className='portfolio__link link' href='#'>
            <img src={strelka} className='portfolio__imagelink link' alt='стрелка,которая является ссылкой'></img>
          </a>
        </div>
        <div className='portfolio__linkbox'>
          <p className='portfolio__site'>Одностраничное приложение</p>
          <a className='portfolio__link link' href='#'>
            <img src={strelka} className='portfolio__imagelink link' alt='стрелка,которая является ссылкой'></img>
          </a>
        </div>
      </div>
    </section>
    )
}

export default Portfolio;