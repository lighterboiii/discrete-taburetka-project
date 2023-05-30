import { useState, useEffect, FC } from 'react';
import st from "./list.module.css";
import { useNavigate } from 'react-router-dom';
import { Rest } from '../../components/Rest/Rest';
import { cityData } from '../../utils/types';

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
          <Rest index={index} item={item} />
        ))}
      </ul>
      {/* <div className={st.buttons}> */}
        {/* <button className={st.button} onClick={handleFilterClick}>Фильтр &#9776;</button> */}
        <button className={st.button} onClick={handleClick}>Назад</button>
      {/* </div> */}
    </div>
  );
};
