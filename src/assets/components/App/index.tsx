import React from 'react';
import { Header } from '../Header/index';
import { Footer } from '../Footer/index';
import './style.css';
import { Title } from '../Title';

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Title title={"erfwe"}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
