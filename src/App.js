import React, { useContext } from 'react';
import Header from './components/Header';
import Context from './context/Context';
import GlobalStyle from './styles/global';

function App() {
  const { data: { photos }, isLoading } = useContext(Context);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <main>
      <GlobalStyle />
      <Header />
      { photos.map(({ src: { original } }) => (
        <section>
          <img src={original} alt="" width="200px" />
        </section>
      )) }
    </main>
  );
}

export default App;
