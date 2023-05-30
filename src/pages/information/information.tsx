import st from "./information.module.css";
import { useNavigate } from "react-router-dom";
import { cityData } from "../../utils/types";
import { FC } from "react";

interface IInfoPage {
  data?: cityData[];
}

export const InfoPage: FC<IInfoPage> = ({ data }) => {

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