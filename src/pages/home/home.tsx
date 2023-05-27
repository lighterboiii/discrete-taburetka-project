import { ChangeEvent, FC, useState, useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import st from './home.module.css';
import { ListPage } from "../list/list";
import { orel, belgorod, mtsensk } from "../../utils/data";

type cityData = {
  id: number; 
  name: string; 
  street: string; 
  type: string; 
};

export const HomePage: FC = () => {

  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('init');
  const options = [
    { value: 'init', label: 'Ваш город' },
    { value: 'Mtsensk', label: 'Мценск' },
    { value: 'Belgorod', label: 'Белгород' },
    { value: 'Orel', label: 'Орёл' },
  ];

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    // setCityData(getDataForSelectedCity());
  };

  const getDataForSelectedCity = () => {
    switch (selectedValue) {
      case 'Mtsensk':
        return mtsensk;
      case 'Belgorod':
        return belgorod;
      case 'Orel':
        return orel;
      default:
        return [];
        // return 'Ваш город пока недоступен, но мы работаем над этим :)';
    }
  };
  const [cityData, setCityData] = useState<cityData[]>([]);
  const handleClick = () => {
    navigate('/list');
  };
  console.log(cityData);

  useEffect(() => {
    const result = getDataForSelectedCity();
    setCityData(result);
  }, [selectedValue]);

  const renderButton = () => {
    if (selectedValue !== 'init') {
      return <button className={st.button} onClick={handleClick}>Начать поиск</button>;
    }
    return null;
  };

  const matchList = useMatch('/list');

  return (
    <section className={st.wrapper}>
      {Boolean(matchList) ? <ListPage data={cityData} /> :
        <>
          <h2 className={st.h2}>Telegram <span className={st.green}>Adventure</span></h2>
          <div className={st.selectContainer}>
            <label htmlFor="dropdown" className={st.h3}>Выберите город:</label>
            <select name="city" id="city" className={st.select + ' select'} value={selectedValue} onChange={handleDropdownChange}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))};
            </select>
          </div>
          <div className={st.buttonContainer}>
            {renderButton()}
          </div>
        </>
      }
    </section>
  )
};