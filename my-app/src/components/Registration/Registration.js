import headerLogo from '../../images/logo.svg';
import { Link, Navigate, useLocation } from 'react-router-dom';
import {useForm} from 'react-hook-form';

function Registration(props) {

  const {
    register,
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    let  { username, email, password } = data;
    props.onRegister( username, email, password );
    reset();
  }

  return (
    <section className='registration'>
      <div className='registration__top'>
      <Link to='/'><img src={headerLogo} alt='логотип' className='link'></img></Link>
      <h1 className='registration__title'>Добро пожаловать!</h1>
      </div>
      <form className='registration__form' onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p className='registration__form-name' >Имя</p>
          <input
          className={`registration__input ${errors?.username ? `error__input` : ``}`}
          placeholder='Вашe имя'
          {...register('username', {
            required: "Поле обязательно к заполнению!",
            minLength: {
              value: 2,
              message: "Поле должно содержать более 2 символом"
            },
            maxLength: {
              value: 30,
              message: "Поле должно содержать менее 30 символом"
            }
          }
          )}
          />
        </label>
         {errors?.username && <div><p className='error'>{errors?.username?.message}</p></div>}
        <label>
        <p className='registration__form-name' >E-mail</p>
          <input
          className={`registration__input ${errors?.email ? `error__input` : ``}`}
          placeholder='Ваш E-mail'
          {...register('email', {
            required: "Поле обязательно к заполнению!",
            pattern: {
              value: /^[a-zA-Zа-яА-Я0-9]+(?:[._-][a-zA-Zа-яА-Я0-9]+)*@(?:gmail.com|mail.ru)$/,
              message: "Невалидный e-mail"
            },
          }
          )}
           />
        </label>
        {errors?.email && <div><p className='error'>{errors?.email?.message}</p></div>}
        <label>
          <p
          className='registration__form-name' >Пароль</p>
          <input
          className={`registration__input ${errors?.password ? `error__input` : ``}`}
          placeholder='Придумайте пароль'
          type="password"
          {...register('password', {
            required: "Поле обязательно к заполнению!",
          }
          )}
          />
        </label>
        {errors?.password && <div><p className='error'>{errors?.password?.message}</p></div>}
        <div className='registration__bot'>
        <button type="submit" className='registration__button button' disabled={!isValid} >Зарегистрироваться</button>
        <p className='registration__question'>Уже зарегистрированы?  <Link to='/signin' className='link registration__link'>Войти</Link></p>
        </div>
        </form>
    </section>
    )
}

export default Registration;