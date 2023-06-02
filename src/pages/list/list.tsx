import { useState, useEffect, FC } from 'react';
import st from "./list.module.css";
import { useNavigate } from 'react-router-dom';
import { Rest } from '../../components/Rest/Rest';
import { cityData } from '../../utils/types';

interface IListPage {
  data?: cityData[];
}

export const ListPage: FC<IListPage> = ({ data }) => {
  const navigate = useNavigate();
  const [listData, setListData] = useState<cityData[]>([]);


  useEffect(() => {
    if (data) {
      setListData(data);
    }
  }, [data]);
console.log(data);
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={st.wrapper}>
        <>
          <ul className={st.list}>
            {listData.map((item: cityData, index: number) => (
                <Rest index={index} item={item} />
            ))}
          </ul>
          <button className={st.button} onClick={handleClick}>Назад</button>
        </>
    </div>
  );
};
