import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  background: ${(props) => props.theme.colors.primary};

  h2 {
    margin-top: 2em;
    text-align: center;
    font-weight: 800;
    font-family: 'Montserrat', sans-serif;
    color: #1971ec;
    font-size: 28px;
  }
`;
