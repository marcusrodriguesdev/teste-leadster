import styled from 'styled-components';

export const Container = styled.nav`
  align-items: center;
  display: flex;
  height: 30px;
  justify-content: space-around;
  padding-top: 115px;
  text-align: center;
  
  .number-page {
    color: ${(props) => props.theme.colors.text}
  }

  button {
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 19px;
    font-weight: 700;
    height: 40px;
    width: 40px;
  }

  @media screen and (max-width: 414px) {
    padding-top: 100px;
  }
`;
