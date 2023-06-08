import { FC } from "react";
import st from './profile.module.css';

export const ProfilePage: FC = () => {
  return (
    <section className={st.container}>
      <div className={st.userInfo}>
        <img src="*" alt="Фотография пользователя" className={st.avatar} />
        <div className={st.userName}> 
          <p className={st.user} >Артем</p>
          <p className={st.user} >Юрьевич</p>
          <p className={st.user} >Башлыков</p>
        </div>
      </div>
    </section>
  )
};