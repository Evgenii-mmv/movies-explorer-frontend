import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/context';
import {useForm} from 'react-hook-form';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  let navigate = useNavigate();

  const {
    register,
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    let defaultValues = {};
    defaultValues.username = currentUser.name;
    defaultValues.email = currentUser.email;
    reset({ ...defaultValues });
  }, [currentUser]);

  function singOut() {
    props.setAccept(false)
    localStorage.removeItem('jwt');
    localStorage.removeItem('moviesPage');
    localStorage.removeItem('savedMoviesPage');
    navigate('/');
    props.disableLogged();
  }

  const onSubmit = (data) => {
    props.setAccept(false)
    const  { username, email } = data;
    if(currentUser.name === username && currentUser.email === email)
    {
      return;
    }
    props.updateProfile( username, email );
    reset();
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className='profile__form' onSubmit={handleSubmit(onSubmit)} >
        <label className='profile__text-container'>
        <p className='profile__input-name profile__input-name--name' >Имя</p>
          <input
          className={`profile__input profile__input--name ${errors?.username ? `error__input` : ``}`}
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
        <label className='profile__text-container'>
        <p className=' profile__input-name profile__input-name--email' >Е-mail</p>
          <input

          className={`profile__input profile__input--email ${errors?.email ? `error__input` : ``}`}
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
        <div className='profile__bot'>
        <button className='button profile__button' disabled={!isValid}>Редактировать</button>
        <p onClick={singOut} className='profile__link link'>Выйти из аккаунта</p>
        { props.accept ? (<p className='profile__accept'>Профиль успешно сохранен!</p>) : (<p className='profile__accept'></p>) }
        </div>
        </form>
    </section>

    )
}

export default Profile;