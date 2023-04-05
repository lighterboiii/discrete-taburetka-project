import { FC } from "react";
import { Link } from "react-router-dom";
import st from './Header.module.css';

export const Header: FC = () => {

  return (
    <header className={st.container}>
      <Link to='/' className={st.link + ' mainLink'}>На главную</Link>
      <nav className={st.nav}>
        <Link className={st.link} to='/map'>Места вокруг</Link>
        <Link className={st.link} to='/random'>Случайное место</Link>
        <Link className={st.link} to='/contacts'>Связаться с нами</Link>
      </nav>
    </header>
  );
};