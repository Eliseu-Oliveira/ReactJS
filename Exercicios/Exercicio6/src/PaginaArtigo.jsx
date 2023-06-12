import React from 'react';
import { useParams } from 'react-router-dom';

const PaginaArtigo = () => {
  const { id } = useParams();


  return (
    <div>
      <h2>Página do Artigo {id}</h2>
    </div>
  );
};

export default PaginaArtigo;
