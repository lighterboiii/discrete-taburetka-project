import { ChangeEvent, FC, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import st from './home.module.css';

export const HomePage: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { user, accessToken } = useSelector((store) => store.userReducer);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   dispatch(setRegistration(email, password, name));
  //   navigate('/profile');
  // };

  return (
    <div className={st.wrapper}>
      <h2 className={st.heading}>Регистрация</h2>
      <form className={st.form}>
        <input
          className={st.input}
          type='text'
          name='name'
          value={name}
          placeholder='Имя'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <input
          className={st.input}
          name='email'
          value={email}
          placeholder='Почта'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <input
          className={st.input}
          name='password'
          value={password}
          placeholder='Пароль'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <button className={st.button}>Регистрация</button>
      </form>
      <div className={st.container}>
        <p className={st.text}>Уже зарегистрированы?</p>
        <Link className={st.link} to="/" ><button className={st.button}>Войти</button></Link>
      </div>
    </div>
  )
};