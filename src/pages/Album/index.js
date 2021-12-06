import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Context from '../../context/Context';
import { ContainerAlbum } from './styles';

function Album() {
  const { data: { photos }, isLoading } = useContext(Context);
  return (
    <ContainerAlbum>
      { isLoading ? 'Loading...' : photos.map((photo, { scrollPosition }) => (
        <LazyLoadImage
          effect="blur"
          src={photo.src.medium}
          alt={photo.photographer}
          key={photo.id}
          height="400px"
          width="300px"
          scrollPosition={scrollPosition}
          className="photos-album"
        />
      )) }
    </ContainerAlbum>
  );
}

export default Album;
