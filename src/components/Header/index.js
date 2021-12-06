import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import Context from '../../context/Context';
import LeadsterIcon from '../../images/leadster_icon.png';
import { Container } from './styles';

function Header() {
  const { toogleTheme } = useContext(Context);
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <img src={LeadsterIcon} alt="leadster-icon" className="leadster-icon" />
      <h1 className="title-header">Leadster - Álbum de Fotos</h1>
      <Switch
        onChange={() => toogleTheme()}
        checked={title === 'dark'}
        checkedIcon={false}
        className="switch"
        uncheckedIcon={false}
        height={16}
        width={35}
        handleDiameter={13}
        offColor="#44444C"
        onColor="#ADB5BD"
        offHandleColor="#212529"
        onHandleColor="#fff"
      />
    </Container>
  );
}

export default Header;
