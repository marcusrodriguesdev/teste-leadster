import styled from 'styled-components';

export const ContainerAlbum = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0 20px 0;

  .photos-album {
    height: 400px;
    width: 300px;
  }
`;
