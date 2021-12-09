import styled from 'styled-components';

export const ContainerAlbum = styled.main`
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 35px 0 75px 0;

  .photos-album {
    height: 400px;
    width: 300px;
  }
`;
