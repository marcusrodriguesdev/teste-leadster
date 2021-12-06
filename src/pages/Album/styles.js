import styled from 'styled-components';

export const ContainerAlbum = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  margin: 20px 0 20px 0;

  .photos-album {
    height: 400px;
    width: 300px;
  }
`;
