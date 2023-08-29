import React from 'react';
import { Header } from '../Header/index';
import { Footer } from '../Footer/index';
import './css/style.css';
import { FirstScreen } from '../FirstScreen';
import { AboutMeContainer } from '../AboutMe';

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <FirstScreen />
        <AboutMeContainer />
        
      </div>
      <Footer />
    </>
  );
}

export default App;
