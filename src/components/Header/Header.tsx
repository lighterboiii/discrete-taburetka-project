import { FC } from "react";
import { Link, useMatch } from "react-router-dom";
import st from './Header.module.css';

interface IHeader {
  one: string;
  two: string;
  three: string;
}

export const Header: FC<IHeader> = ({ one, two, three }) => {

  return (
    <header className={st.container}>
      <Link to='/' className={st.link + ' mainLink'}>Главная</Link>
      <nav className={st.nav}>
        <Link className={st.link} to='/map'>{one}</Link>
        <Link className={st.link} to='/login'>{two}</Link>
        <Link className={st.link} to='/contacts'>{three}</Link>
      </nav>
    </header>
  );
};