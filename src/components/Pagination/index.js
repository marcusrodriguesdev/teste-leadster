import React, { useContext } from 'react';
import Context from '../../context/Context';

import { Container } from './styles';

function Pagination() {
  const { currentPage, setCurrentPage } = useContext(Context);

  if (currentPage < 1) {
    alert('Nao e possivel voltar mais paginas');
    setCurrentPage(1);
  }

  return (
    <Container>
      <button
        type="button"
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        { '<' }
      </button>
      <h2 className="number-page">{ currentPage }</h2>
      <button
        type="button"
        onClick={() => { setCurrentPage(currentPage + 1); }}
      >
        { '>' }
      </button>
    </Container>
  );
}

export default Pagination;
