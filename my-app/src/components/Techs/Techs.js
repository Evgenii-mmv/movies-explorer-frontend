

function Techs() {

  return (
  <section  className='tech'>
      <h1 className='tech__topic'>Технологии</h1>
      <div className='tech__text'>
        <h2 className='tech__title'>7 технологий</h2>
        <p className='tech__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <div className='tech__technologies'>
        <div className='tech__block'>
          <p className='tech__name'>HTML</p>
        </div>
        <div className='tech__block'>
          <p className='tech__name'>CSS</p>
        </div>
        <div className='tech__block'>
          <p className='tech__name'>JS</p>
        </div>
        <div className='tech__block'>
          <p className='tech__name'>React</p>
        </div>
        <div className='tech__block'>
          <p className='tech__name'>Git</p>
        </div>
        <div className='tech__block'>
          <p className='tech__name'>Express.js</p>
        </div>
        <div className='tech__block'>
          <p className='tech__name'>mongoDB</p>
        </div>
      </div>
    </section>
    )
}

export default Techs;