import React from 'react';
import './css/style.css';
import { Header } from '../Header/index';
import { FirstScreen } from '../FirstScreen';
import { AboutMeContainer } from '../AboutMe';
import { MyTaskContainer } from '../MyTask';
import { ServicesContainer } from '../Services';
import { PortfolioContainer } from '../Portfolio';
import { ReviewsContainer } from '../Reviews';
import { ContactContainer } from '../Contact';
import { Footer } from '../Footer';

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
        <PortfolioContainer />
        <ReviewsContainer />
        <ContactContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
