import { useState, useEffect, FC } from 'react';
import st from "./list.module.css";
import { useNavigate } from 'react-router-dom';

interface cityData {
  id: number;
  name: string;
  street: string;
  type: string;
}

interface CustomListProps {
  data?: cityData[];
}

export const ListPage: FC<CustomListProps> = ({ data }) => {
  const navigate = useNavigate();
  const [listData, setListData] = useState<cityData[]>([]);


  useEffect(() => {
    if (data) {
      setListData(data);
    }
  }, [data]);

  const handleClick = () => {
    navigate(-1);
  };

  const handleFilterClick = () => {
    navigate('/filter');
  };

  return (
    <div className={st.wrapper}>
      <ul className={st.list}>
        {listData.map((item, index) => (
          <li key={index} className={st.item}>
            <p className={st.name}>{item.name}</p>
            <p>{item.street}</p>
            <p>{item.type}</p>
          </li>
        ))}
      </ul>
      {/* <div className={st.buttons}> */}
        {/* <button className={st.button} onClick={handleFilterClick}>Фильтр &#9776;</button> */}
        <button className={st.button} onClick={handleClick}>Назад</button>
      {/* </div> */}
    </div>
  );
};
