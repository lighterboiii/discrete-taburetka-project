import { FC } from "react";
import st from './home.module.css';

export const HomePage: FC = () => {


  return (
    <>
      <h2 className={st.h2}><span className={st.green}>Здравствуйте,</span> выберите ваше местонахождение</h2>
      <div className={st.selectContainer}>
        <select name="country" id="country" className={st.select + ' select'}>
          <option id='country1' value='check'>Страна</option>
          <option className="selectLabel" id='2' value='ru'>Россия</option>
          <option className="selectLabel" id='3' value='ge'>Грузия</option>
          <option className="selectLabel" id='4' value='an'>Турция</option>
          <option className="selectLabel" id='5' value='us'>США</option>
          <option className="selectLabel" id='6' value='jp'>Япония</option>
        </select>
        <select name="city" id="city" className={st.select + ' select'}>
          <option id='city1'>Город</option>
          <option className="selectLabel" id='city2'>Мценск</option>
          <option className="selectLabel" id='city3'>Орел</option>
          <option className="selectLabel" id='city4'>Мать</option>
          <option className="selectLabel" id='city5'>Вашингтон</option>
          <option className="selectLabel" id='city6'>Спрингфилд</option>
        </select>
      </div>
    </>
  )
}