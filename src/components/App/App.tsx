import st from './App.module.css';
import { BrowserRouter as Router, Routes, Route, useLocation, useMatch } from 'react-router-dom';
import { RegisterPage } from '../../pages/register/register';
import { ContactsPage } from '../../pages/contacts/contacts';
import { AroundPage } from '../../pages/around/around';
import { Header } from '../Header/Header';
import { FC, useEffect, useState } from 'react';
import { MainPage } from '../../pages/main/main';
import { ListPage } from '../../pages/list/list';
import { LoginPage } from '../../pages/login/login';
import { InfoPage } from '../../pages/information/information';
import { ProfilePage } from '../../pages/profile/profile';
import { FavPage } from '../../pages/favorite/favorite';
// import { citiesData } from '../../utils/data';
// import { ICitiesData } from '../../utils/types';

export const App: FC = () => {
  const location = useLocation();
  const background = location;
  const isMatchProfile = useMatch('/profile/*');
  // const [data, setData] = useState<ICitiesData>();

  // useEffect(() => {
  //   setData(citiesData);
  // },[]);

  return (
    <div className={st.App}>
      <Routes location={background}>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/map' element={<AroundPage />} />
        <Route path='/main' element={<MainPage />}>
          <Route path='list' element={<ListPage />} />
          <Route path='list/:id' element={<InfoPage />} />
        </Route>
        <Route path='/profile' element={<ProfilePage />}>
          <Route path='favorite' element={<FavPage />} />
        </Route>
      </Routes>
      <Header
        one={isMatchProfile ? 'Избранное' : 'Карта'}
        two={isMatchProfile ? 'Добавить' : 'Поиск'}
        three={isMatchProfile ? 'Приколы' : 'Информация'} />
    </div>
  );
}

export default App;
