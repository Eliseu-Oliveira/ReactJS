import React from 'react';
import { useParams } from 'react-router-dom';

const Artigo = () => {
  const { tipo } = useParams();

  const artigo = listaArtigos.find((artigo) => artigo.tipo === tipo);

  if (!artigo) {
    return <div>Artigo não encontrado</div>;
  }

  return (
    <div>
      <h2>{artigo.nome}</h2>
      <img src={artigo.imagem} alt={artigo.nome} />
      <p>{artigo.conteudo}</p>
    </div>
  );
};

export default Artigo;