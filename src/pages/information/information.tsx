import st from "./information.module.css";
import { useNavigate } from "react-router-dom";

export const InfoPage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  }

  return ( 
    <div className={st.container}>
    <p className={st.text}>Здесь будет подробная информация о заведении</p>
    <button onClick={handleClick} className={st.button}>Назад</button>
  </div>
  )
};