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
        <Footer /> 
      </div>
      {/* <footer>
        <span>Copyright © 2023 Попов Матвей. Design by Web</span>
      </footer> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
