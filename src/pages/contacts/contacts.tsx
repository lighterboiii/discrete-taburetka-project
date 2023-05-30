import { FC } from "react";
import st from './contacts.module.css';

export const ContactsPage: FC = () => {
  return (
    <section className={st.wrapper}>
      <h2 className={st.h2}>
        Просто найдите свой город в списке и мы подскажем,
        <span className={st.span}>где можно вкусно поесть или интересно провести время.</span>
      </h2>
      <nav className={st.nav}>
        <h3 className={st.h3}>Наши контакты</h3>
        <div className={st.linkContainer}>
          <a className={st.link} href="#">Артем</a>
          <a className={st.link} href="#">Слава</a>
          <a className={st.link} href="#">Дима</a>
        </div>
      </nav>
    </section>
  )
}