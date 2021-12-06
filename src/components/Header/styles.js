import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background: ${(props) => props.theme.colors.secondary};
  display: flex;
  font-weight: 700;
  height: 80px;
  justify-content: space-between;

  .leadster-icon {
    margin-left: 2em;
    cursor: pointer;
    width: 45px;
    height: 40px;
  }
  
  .title-header {
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.text};
  }

  .switch {
    margin-right: 2em;
  }


  @media screen and (max-width: 414px) {
    height: 10vh;

    .leadster-icon {
      margin-left: 0.7em;
      cursor: pointer;
      width: 12vw;
    }

    .title-header {
      font-family: 'Montserrat', sans-serif;
      color: ${(props) => props.theme.colors.text};
      font-size: 4.7vw;
      margin-left: 8px;
    }

    .switch {
      margin-right: 0.7em;
    }
  }
`;
