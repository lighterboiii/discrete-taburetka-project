import { FC } from "react";
import { cityData } from "../../utils/types";
import st from "./Rest.module.css";
import { Link } from "react-router-dom";

interface IRest {
  index: number;
  item: cityData;
}

export const Rest: FC<IRest> = ({ index, item }) => {
  return (
    <Link className={st.link} to={`/main/list/${item.id}`}>
    <li key={item.id} >
      <p className={st.name}>{item.name}</p>
      <p>{item.street}</p>
      <p>{item.type}</p>
    </li>
    </Link>
  )
}

