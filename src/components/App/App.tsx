import st from './App.module.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route, useLocation, Link, useMatch } from 'react-router-dom';
import { RegisterPage } from '../../pages/register/register';
import { ContactsPage } from '../../pages/contacts/contacts';
import { AroundPage } from '../../pages/around/around';
import { Header } from '../Header/Header';
import { FC } from 'react';
import { MainPage } from '../../pages/main/main';
import { ListPage } from '../../pages/list/list';
import { InfoPage } from '../../pages/information/information';
import { ProfilePage } from '../../pages/profile/profile';
import { FavPage } from '../../pages/favorite/favorite';
import { LoginPage } from '../../pages/login/login';

export const App: FC = () => {
  const location = useLocation();
  const background = location;

  const matchLogin = useMatch('/login/*');

  return (
    <div className={st.App}>
      <Link to={'/login'}><button className={Boolean(matchLogin) ? `${st.userButtonActive}` : `${st.userButton}`}></button></Link>
      <Routes location={background}>
        <Route path='/' element={<MainPage />}>
          <Route path='list' element={<ListPage />} />
          <Route path='list/:id' element={<InfoPage />} />
        </Route>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/map' element={<AroundPage />} />
        <Route path='/login' element={<LoginPage />} />
        {/* <Route path='/main' element={<MainPage />}>
          <Route path='list' element={<ListPage />} />
          <Route path='list/:id' element={<InfoPage />} />
        </Route> */}
        <Route path='/profile' element={<ProfilePage />}>
          <Route path='favorite' element={<FavPage />} />
        </Route>
      </Routes>
      <Header
        one={'Карта'}
        two={'Поиск'}
        three={'Информация'}
      />
    </div>
  );
}

export default App;
