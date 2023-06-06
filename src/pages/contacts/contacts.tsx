import { FC } from "react";
import st from './contacts.module.css';

export const ContactsPage: FC = () => {
  return (
    <section className={st.wrapper}>
      <h2 className={st.h2}>
        Просто найдите свой город в списке и мы подскажем,
        <span className={st.span}>где можно вкусно поесть или интересно провести время.</span>
      </h2>
      <h2 className={st.h3}>Вы можете предложить <span className={st.link}>своё любимое заведение</span></h2>
    </section>
  )
}