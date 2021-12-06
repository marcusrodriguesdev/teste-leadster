import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background: ${(props) => props.theme.colors.secondary};
  display: flex;
  font-weight: 700;
  height: 80px;
  justify-content: space-between;

  .switch {
    margin-right: 2em;
  }

  .title-header {
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.text};
  }

  .leadster-icon {
    margin-left: 2em;
    cursor: pointer;
    width: 45px;
    height: 40px;
  }
`;
