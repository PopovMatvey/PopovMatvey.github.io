import React from 'react';
import { Header } from '../Header/index';
import { Footer } from '../Footer/index';
import './style.css';
import { Title } from '../Title';
import { FirstScreen } from '../FirstScreen';

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <FirstScreen />
        {/* <Title title={"erfwe"}/> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
