import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <p>Desenvolvido por Marcus Rodrigues</p>
      <div>
        <a
          href="https://www.linkedin.com/in/marcusrodriguesdev/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={25} className="icon" />
        </a>
        <a
          href="https://github.com/marcusrodriguesdev/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={25} className="icon" />
        </a>
      </div>
    </Container>
  );
}

export default Footer;
