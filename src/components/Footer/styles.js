import styled from 'styled-components';

export const Container = styled.footer`
  background: ${(props) => props.theme.colors.primary};
  height: 100px;
  padding: 3em 0;
  text-align: center;

  p {
    color: ${(props) => props.theme.colors.text};
    font-size: 15px;
    font-weight: 700;
    opacity: 0.8;
  }
`;
