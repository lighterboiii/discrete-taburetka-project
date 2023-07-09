import { FC } from "react";
import st from './profile.module.css';
import { Link } from "react-router-dom";

export const ProfilePage: FC = () => {
  return (
    <section className={st.container}>
      <div className={st.userInfo}>
        <img src="https://i.pravatar.cc/" alt="Фотография пользователя" className={st.avatar} />
        <div className={st.userName}>
          <p className={st.user} >Ильясов</p>
          <p className={st.user} >Артём</p>
          <p className={st.user} >Камильевич</p>
        </div>
      </div>
      <div className={st.menu}>
        <Link className={st.link} to={'/'}>Избранное</Link>
        <Link className={st.link} to={'/'}>Способы оплаты</Link>
        <Link className={st.link} to={'/'}>Редактировать профиль</Link>
      </div>
    </section>
  )
};