import { FC, FormEvent, useState } from 'react';
import st from './login.module.css';
import { useNavigate, Link } from 'react-router-dom';

export const LoginPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(setLogin(email, password));
    navigate('/');
  };

  return (
    <div className={st.wrapper}>
      <h2 className={st.h2}>Вход</h2>
      <form className={st.form} onSubmit={onFormSubmit}>
        <input
          name='email'
          value={email}
          placeholder='Почта'
          className={st.input}
          onChange={(e) => setEmail(e.target.value)} required></input>
        <input
          name='password'
          value={password}
          className={st.input}
          placeholder='Пароль'
          onChange={(e) => setPassword(e.target.value)} required></input>
        <button className={st.button}>Войти</button>
      </form>
      <div className={st.container}>
        <button className={st.button}>
          <Link to="/" className={st.link}>Регистрация</Link>
        </button>
        {/* <button className={st.lowBtn}>
          <Link to="/forgot-password" className={st.link}>Восстановить пароль</Link>
        </button> */}
      </div>
    </div>
  )
};