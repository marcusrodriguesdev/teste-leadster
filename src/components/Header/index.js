import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import Context from '../../context/Context';
import { Container } from './styles';
// import light from '../../styles/light';
// import dark from '../../styles/dark';

function Header() {
  const { toogleTheme } = useContext(Context);
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <div>
        { title === 'light' ? (
          <img
            src="https://leadster.com.br/img/leadster/leadster.svg"
            alt="logo-leadster"
            className="logo-leadster"
          />
        ) : (
          <img
            src="https://leadster.com.br/img/leadster/leadster-white.svg"
            alt="logo-leadster-white"
            className="logo-leadster"
          />
        ) }
      </div>
      <Switch
        onChange={() => toogleTheme()}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor="#44444C"
        onColor="#ADB5BD"
        offHandleColor="#212529"
        onHandleColor="#fff"
      />
    </Container>
  );
}

export default Header;
