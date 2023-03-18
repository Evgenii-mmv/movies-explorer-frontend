function AboutProject(props) {

  return (
    <section id={props.id}  className='about'>
      <h1 className='about__topic'>О проекте</h1>
      <div className='about__text'>
        <div className='about__bar'>
          <h2 className='about__title'>Дипломный проект включал 5 этапов</h2>
          <p className='about__subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about__bar'>
          <h2 className='about__title'>На выполнение диплома ушло 5 недель</h2>
          <p className='about__subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about__schedule'>
        <div className='about__backend'><p className='about__time'>1 неделя</p></div>
        <div className='about__frontend'><p className='about__time'>4 недели</p></div>
        <div><p className='about__dev'>Back-end</p></div>
        <div><p className='about__dev'>Front-end</p></div>
      </div>
    </section>
  )
}

export default AboutProject;