import PromoLogo from '../../images/text__COLOR_landing-logo.png';
function Promo() {

  return (
    <section className='promo'>
      <div className='promo__info'>
        <img src={PromoLogo} alt="Промо" className='promo__image'></img>
        <div className='promo__text'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className='promo__button button'><a className='promo__link link' href='#' >Узнать больше</a></button>
        </div>
      </div>
      {/* <img src={PromoLogo} alt="Промо"></img> */}
    </section>
  )
}

export default Promo;