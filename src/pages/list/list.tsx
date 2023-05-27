import React, { useState, useEffect, FC } from 'react';
import st from "./list.module.css";
import { useNavigate } from 'react-router-dom';

type Data = {
  id: number;
  name: string;
  street: string;
  type: string;
};
interface Props {
  data: any;
}

export const ListPage: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const [listData, setListData] = useState<Data[]>([]);
  console.log(listData)

  useEffect(() => {
    setListData(data);
  }, [data]);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <ul className={st.list}>
        {listData.map((item, index) => (
          <li key={index} className={st.item}>
            <p className={st.name}>{item.name}</p>
            <p>{item.street}</p>
            <p>{item.type}</p>
          </li>
        ))}
      </ul>
      <button className={st.button} onClick={handleClick}>Назад</button>
    </>
  );
};
