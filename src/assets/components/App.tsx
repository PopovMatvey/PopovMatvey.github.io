import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import '../css/App.css';

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <h1>Пока что ничего нет</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
