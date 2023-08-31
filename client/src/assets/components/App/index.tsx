import React from 'react';
import './css/style.css';
import { Header } from '../Header/index';
import { Footer } from '../Footer/index';
import { FirstScreen } from '../FirstScreen';
import { AboutMeContainer } from '../AboutMe';
import { MyTaskContainer } from '../MyTask';
import { ServicesContainer } from '../Services';

// Приложение
function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <FirstScreen />
        <AboutMeContainer />
        <MyTaskContainer />
        <ServicesContainer />


        <Footer />
      </div>
    </>
  );
}

export default App;
