import React from 'react';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <img
        src="https://leadster.com.br/img/leadster/leadster.svg"
        alt="logo-leadster"
        className="logo-leadster"
      />
    </Container>
  );
}

export default Header;
