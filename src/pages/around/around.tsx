import { FC } from "react";
import st from './around.module.css';


export const AroundPage: FC = () => {
  return (
    <div className={st.container}>
      <iframe
        className={st.iframe}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A579a68533a71ae0c4e357622a6d5125713203935196dddb8a905b9ba40f348f9&amp;source=constructor"
        width="500"
        height="400"
        frameBorder="0"></iframe>
      <ul className={st.ul}>
        <li className={st.listItem}><span className={st.span}>Исследуйте город</span> в поисках интересующего вас заведения</li>
        <li className={st.listItem}><span className={st.span}>Забронируйте столик</span> или закажите доставку прямо в приложении</li>
        <li className={st.listItem}><span className={st.span}>Оставляйте отзывы</span> и зарабатывайте баллы</li>
      </ul>
    </div>
  )
};