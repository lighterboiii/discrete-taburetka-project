import st from './App.module.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from '../../pages/home/home';
import { ContactsPage } from '../../pages/contacts/contacts';
import { AroundPage } from '../../pages/around/around';
import { Header } from '../Header/Header';
import { FC } from 'react';
import { MainPage } from '../../pages/main/main';
import { ListPage } from '../../pages/list/list';
import { LoginPage } from '../../pages/login/login';

export const App: FC = () => {
  const location = useLocation();

  const background = location;

  return (
    <div className={st.App}>
      <Routes location={background}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/map' element={<AroundPage />} />
        <Route path='/main' element={<MainPage />}>
          <Route path='list' element={<ListPage />} />
        </Route>
      </Routes>
      <Header />
    </div>
  );
}

export default App;
