import React, { useContext } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Context from './context/Context';
import GlobalStyle from './styles/global';

function App() {
  const { data: { photos }, isLoading } = useContext(Context);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      { photos.map(({ src: { original } }) => (
        <section>
          <img src={original} alt="" width="200px" />
        </section>
      )) }
      <Footer />
    </>
  );
}

export default App;
