import st from './App.module.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from '../../pages/home/home';
import { ContactsPage } from '../../pages/contacts/contacts';
import { AroundPage } from '../../pages/around/around';
import { Header } from '../Header/Header';
import { FC } from 'react';

export const App: FC = () => {
  const location = useLocation();

  const background = location;

  return (
    <div className={st.App}>
          <Routes location={background}>
            <Route path='discrete-taburetka-project/' element={<HomePage />} />
            <Route path='discrete-taburetka-project/contacts' element={<ContactsPage />} />
            <Route path='discrete-taburetka-project/map' element={<AroundPage />} />
          </Routes>
          <Header />
    </div>
  );
}

export default App;
