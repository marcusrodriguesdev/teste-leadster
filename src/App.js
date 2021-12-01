import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import CardPhoto from './components/CardPhoto';
import Footer from './components/Footer';
import Header from './components/Header';
import Context from './context/Context';
import GlobalStyle from './styles/global';

function App() {
  const { theme } = useContext(Context);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <CardPhoto />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
