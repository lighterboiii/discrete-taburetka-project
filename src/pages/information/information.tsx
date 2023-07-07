import st from "./information.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { cityData } from "../../utils/types";
import { FC } from "react";

interface IInfoPage {
  data?: cityData[];
}

export const InfoPage: FC<IInfoPage> = ({ data }) => {

  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = data!.find((item: cityData) => item.id === Number(id));

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={st.container}>
      <h3 className={st.name}>{restaurant!.name}</h3>
      <p className={st.text}>Адрес: {restaurant!.street}</p>
      <div className={st.textWrapper}>
        <p className={st.text}>{restaurant!.type}</p>
        <p className={st.text}>{restaurant!.rating}&#42;</p>
      </div>
      <div className={st.buttons}>
        <button className={st.button}>Связаться</button>
        <button onClick={handleClick} className={st.button}>Назад</button>
      </div>
    </div>
  )
};