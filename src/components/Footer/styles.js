import styled from 'styled-components';

export const Container = styled.footer`
  background: ${(props) => props.theme.colors.secondary};
  height: 80px;
  padding: 2.3em 0;
  position: absolute;
  width: 100%;
  text-align: center;

  section {
    display: flex;
  }

  p {
    color: ${(props) => props.theme.colors.text};
    font-size: 15px;
    font-weight: 700;
    opacity: 0.8;
  }
`;
