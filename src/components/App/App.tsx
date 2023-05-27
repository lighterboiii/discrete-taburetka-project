import st from './App.module.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from '../../pages/home/home';
import { ContactsPage } from '../../pages/contacts/contacts';
import { AroundPage } from '../../pages/around/around';
import { Header } from '../Header/Header';
import { FC } from 'react';
import { RandomPage } from '../../pages/random/random';

export const App: FC = () => {
  const location = useLocation();

  const background = location;

  return (
    <div className={st.App}>
      <Routes location={background}>
        <Route path='/' element={<HomePage />}>
          <Route path='list' />
        </Route>
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/map' element={<AroundPage />} />
        <Route path='/random' element={<RandomPage />} />
      </Routes>
      <Header />
    </div>
  );
}

export default App;
