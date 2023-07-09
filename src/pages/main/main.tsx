import { ChangeEvent, FC, useEffect, useState } from "react"
import st from "./main.module.css";
import { useMatch, useNavigate } from "react-router-dom";
import { citiesData } from "../../utils/data";
import { ListPage } from "../list/list";
import { cityData } from "../../utils/types";
import { InfoPage } from "../information/information";
import ReactSelect from 'react-select';

type OptionType = {
  value: string;
  label: string;
};

export const MainPage: FC = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('init');
  const options: OptionType[] = [
    { value: 'init', label: 'Выбрать' },
    { value: 'Mtsensk', label: 'Мценск' },
    { value: 'Belgorod', label: 'Белгород' },
    { value: 'Orel', label: 'Орёл' },
  ];

  // const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedValue(e.target.value);
  // };
  const handleDropdownChange = (selectedOption: any) => {
    setSelectedValue(selectedOption.value);
  };

  const getDataForSelectedCity = () => {
    switch (selectedValue) {
      case 'Mtsensk':
        return citiesData.mtsensk;
      case 'Belgorod':
        return citiesData.belgorod;
      case 'Orel':
        return citiesData.orel;
      default:
        return [];
      // return 'Ваш город пока недоступен, но мы работаем над этим :)';
    }
  };
  const [cityData, setCityData] = useState<cityData[]>([]);

  useEffect(() => {
    const result = getDataForSelectedCity();
    setCityData(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  const renderButton = () => {
    if (selectedValue !== 'init') {
      return <button className={st.button} onClick={handleClick}>Продолжить</button>;
    }
    return null;
  };

  const handleClick = () => {
    navigate('/list');
  };

  const matchList = useMatch('/list');
  const matchMain = useMatch('/');

  // временное решение
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: '#1A1A1A',
      borderColor: state.isFocused ? '#7289DA' : '#333',
      color: '#F5F5F5',
      boxShadow: state.isFocused ? '0 0 0 1px #7289DA' : null,
      '&:hover': {
        borderColor: state.isFocused ? '#7289DA' : '#555',
      }
    }),
  
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#7289DA' : null,
      color: '#F5F5F5',
    }),
  
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: '#1A1A1A',
    }),
  
    singleValue: (provided: any) => ({
      ...provided,
      color: '#F5F5F5',
    }),
  
    input: (provided: any) => ({
      ...provided,
      color: '#F5F5F5',
    }),
  };
  // временное решение
  return (
    <section className={st.wrapper}>
      {Boolean(matchList) ? <ListPage data={getDataForSelectedCity()} /> :
        Boolean(matchMain) ?
          <>
            {/* <h2 className={st.h2}>Telegram <span className={st.green}>Adventure</span></h2> */}
            <div className={st.selectContainer}>
              <label htmlFor="dropdown" className={st.h3}>Выберите ваш город</label>
              <ReactSelect
                className={st.select}
                options={options}
                value={options.find((option) => option.value === selectedValue)}
                onChange={handleDropdownChange}
                styles={customStyles}
              />
              {/* <select
                name="city"
                id="city"
                className={st.select}
                value={selectedValue}
                onChange={handleDropdownChange}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value} className={st.option}>
                    {option.label}
                  </option>
                ))};
              </select> */}
            </div>
            <div className={st.buttonContainer}>
              {renderButton()}
            </div>
          </> :
          <InfoPage data={cityData} />
      }
    </section>
  )
}