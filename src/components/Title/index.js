import React from 'react';

import { Container } from './styles';

function Title() {
  return (
    <Container>
      <div>
        <h2>O Melhor Álbum de Fotos Online</h2>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,128L48,112C96,96,192,64,288,80C384,96,480,160,576,165.3C672,171,768,117,864,85.3C960,53,1056,43,1152,58.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" /></svg>
    </Container>
  );
}

export default Title;
