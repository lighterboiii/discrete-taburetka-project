import { FC } from "react";
import styles from './around.module.css';


export const AroundPage: FC = () => {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.iframe}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Abad0e7b0cb1f520cb926ef19f1acebf3c4a287f72fdf8d824baba1d1dec5e492&amp;source=constructor"
        width="100%"
        height="400px"
        frameBorder={0}
        >
      </iframe>
      <ul className={styles.ul}>
        <li className={styles.listItem}><span className={styles.span}>Исследуйте город</span> в поисках интересующего вас заведения</li>
        <li className={styles.listItem}><span className={styles.span}>Забронируйте столик</span> или закажите доставку прямо в приложении</li>
        <li className={styles.listItem}><span className={styles.span}>Оставляйте отзывы</span> и зарабатывайте баллы</li>
      </ul>
    </div>
  )
};