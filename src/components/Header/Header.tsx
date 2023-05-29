import { FC } from "react";
import { Link } from "react-router-dom";
import st from './Header.module.css';

export const Header: FC = () => {

  return (
    <header className={st.container}>
      <Link to='/' className={st.link + ' mainLink'}>Главная</Link>
      <nav className={st.nav}>
        <Link className={st.link} to='/map'>Карта</Link>
        <Link className={st.link} to='/main'>Поиск</Link>
        <Link className={st.link} to='/contacts'>О нас</Link>
      </nav>
    </header>
  );
};