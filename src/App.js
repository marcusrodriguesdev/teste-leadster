import React, { useContext } from 'react';
import Context from './context/Context';

function App() {
  const { data: { photos } } = useContext(Context);
  console.log(photos);
  return (
    <div>
      { photos.map(({ src: { original } }) => (
        <div>
          <img src={original} alt="" width="200px" />
        </div>
      )) }
    </div>
  );
}

export default App;
