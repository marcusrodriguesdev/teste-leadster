import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import requestApiPexels from '../services';

// import { Container } from './styles';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getPhotos() {
      const request = await requestApiPexels('natureze');
      setData(request);
    }
    getPhotos();
  }, []);

  const context = {
    data,
  };

  return (
    <Context.Provider value={context}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
