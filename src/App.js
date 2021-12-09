import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Context from './context/Context';
import Album from './pages/Album';
import GlobalStyle from './styles/global';

function App() {
  const { theme } = useContext(Context);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Pagination />
      <Album />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
