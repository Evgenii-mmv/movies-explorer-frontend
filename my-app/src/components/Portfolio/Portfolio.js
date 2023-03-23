
import strelka from '../../images/Strelka_link.svg';
function Portfolio() {

  return (
    <section className='portfolio'>
      <h1 className='portfolio__topic'>Портфолио</h1>
      <div className='portfolio__links'>
        <div className='portfolio__linkbox'>
          <a href='https://github.com/Evgenii-mmv/russian-travel' target={'_blank'} className='portfolio__site link'>Статичный сайт</a>
          <a href='https://github.com/' target={'_blank'} className='portfolio__link link' >
            <img src={strelka} className='portfolio__imagelink link' alt='стрелка,которая является ссылкой'></img>
          </a>
        </div>
        <div className='portfolio__linkbox'>
          <a href='https://github.com/Evgenii-mmv/mesto' target={'_blank'} className='portfolio__site link'>Адаптивный сайт</a>
          <a href='https://github.com/' target={'_blank'} className='portfolio__link link' >
            <img src={strelka} className='portfolio__imagelink link' alt='стрелка,которая является ссылкой'></img>
          </a>
        </div>
        <div className='portfolio__linkbox'>
          <a href='https://github.com/Evgenii-mmv/react-mesto-api-full' target={'_blank'} className='portfolio__site link'>Одностраничное приложение</a>
          <a href='https://github.com/Evgenii-mmv/react-mesto-api-full' target={'_blank'} className='portfolio__link link' >
            <img src={strelka} className='portfolio__imagelink link' alt='стрелка,которая является ссылкой'></img>
          </a>
        </div>
      </div>
    </section>
    )
}

export default Portfolio;