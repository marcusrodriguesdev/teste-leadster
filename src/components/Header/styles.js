import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  font-weight: 700;
  height: 80px;
  justify-content: space-between;

  .switch {
    margin-right: 2em;
  }

  .logo-leadster {
    margin-left: 2em;
    cursor: pointer;
    width: 190px;
  }
`;
