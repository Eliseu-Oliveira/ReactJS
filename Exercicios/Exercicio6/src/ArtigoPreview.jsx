import React from 'react';
import { Link } from 'react-router-dom';

const ArtigoPreview = ({ nome, imagem, conteudo, tipo }) => {
  return (
    <div>
      <h2>{nome}</h2>
      <img src={imagem} alt={nome} />
      <p>{conteudo}</p>
      <Link to={`/artigos/${tipo}`}>Ver mais</Link>
    </div>
  );
};

export default ArtigoPreview;