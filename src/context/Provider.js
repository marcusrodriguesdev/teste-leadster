import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import requestApiPexels from '../services';
import light from '../styles/light';
import dark from '../styles/dark';

// import { Container } from './styles';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(light);

  const toogleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  useEffect(() => {
    async function getPhotos() {
      const request = await requestApiPexels('natureze');
      setData(request);
      setIsLoading(false);
    }
    getPhotos();
  }, []);

  const context = {
    data,
    isLoading,
    toogleTheme,
    theme,
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
