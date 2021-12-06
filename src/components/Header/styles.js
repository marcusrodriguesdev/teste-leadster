import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background: ${(props) => props.theme.colors.secondary};
  display: flex;
  font-weight: 700;
  height: 80px;
  justify-content: space-between;

  .leadster-icon {
    cursor: pointer;
    height: 40px;
    margin-left: 2em;
    width: 45px;
  }
  
  .title-header {
    color: ${(props) => props.theme.colors.text};
    font-family: 'Montserrat', sans-serif;
  }

  .switch {
    margin-right: 2em;
  }


  @media screen and (max-width: 414px) {
    height: 10vh;

    .leadster-icon {
      cursor: pointer;
      margin-left: 0.7em;
      width: 12vw;
    }

    .title-header {
      color: ${(props) => props.theme.colors.text};
      font-family: 'Montserrat', sans-serif;
      font-size: 4.7vw;
      margin-left: 8px;
    }

    .switch {
      margin-right: 0.7em;
    }
  }
`;
