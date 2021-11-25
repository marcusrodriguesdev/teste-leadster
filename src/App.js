import React, { useContext } from 'react';
import Context from './context/Context';
import GlobalStyle from './styles/global';

function App() {
  const { data: { photos } } = useContext(Context);
  return (
    <main>
      <GlobalStyle />
      { photos.map(({ src: { original } }) => (
        <section>
          <img src={original} alt="" width="200px" />
        </section>
      )) }
    </main>
  );
}

export default App;
