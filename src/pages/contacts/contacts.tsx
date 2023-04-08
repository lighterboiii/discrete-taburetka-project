import { FC } from "react";
import st from './contacts.module.css';

export const ContactsPage: FC = () => {
  return (
    <>
      <h2>Наши контакты</h2>
      <nav className={st.nav}>
        <a href="#">Артем @artapr</a>
        <a href="#">Слава @lighterboii</a>
        <a href="https://vk.com/borzenkov57" target="_blank">Дима +79004868862</a>
      </nav>
    </>
  )
}