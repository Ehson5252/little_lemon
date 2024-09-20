import './App.css';
import { Routes, Route, } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero'
import Main from './components/Main';
import Footer from './components/Footer';
import Reservation from './components/Reservation'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="home" element={[<Hero />, <Main />]} />
        <Route path="reservation" element= {<Reservation />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
