import styled from 'styled-components';

export const Container = styled.footer`
  background: ${(props) => props.theme.colors.secondary};
  height: 80px;
  padding: 2.3em 0;
  position: absolute;
  text-align: center;
  width: 100%;

  p {
    color: ${(props) => props.theme.colors.text};
    font-size: 15px;
    font-weight: 700;
    opacity: 0.8;
  }

  .linkedin-link {
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
    text-decoration: none;
  }
`;
