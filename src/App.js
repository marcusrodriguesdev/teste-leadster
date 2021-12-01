import React from 'react';
import CardPhoto from './components/CardPhoto';
import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <CardPhoto />
      <Footer />
    </>
  );
}

export default App;
