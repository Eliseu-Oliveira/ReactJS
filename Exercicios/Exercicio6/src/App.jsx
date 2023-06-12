import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ArtigoPreview from './ArtigoPreview';
import Artigo from './Artigo';
import Breadcrumb from './Breadcrumb';

const listaArtigos = [
  {
    nome: 'Artigo 1',
    imagem: '/assets/imagem1.png',
    conteudo: 'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    tipo: 'Tipo 1'
  },
  {
    nome: 'Artigo 2',
    imagem: '/assets/imagem2.jpg',
    conteudo: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    tipo: 'Tipo 2'
  },
  {
    nome: 'Artigo 3',
    imagem: '/assets/imagem3.png',
    conteudo: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    tipo: 'Tipo 3'
  }
];

const App = () => {
  return (
    <Router>
      <div>
        <Breadcrumb />
        <Routes>
          <Route path="/artigos" element={<ListaArtigos />} />
          <Route path="/artigos/:tipo" element={<Artigo listaArtigos={listaArtigos} />} />
        </Routes>
      </div>
    </Router>
  );
};

const ListaArtigos = () => {
  return (
    <div>
      {listaArtigos.map((artigo, index) => (
        <ArtigoPreview key={index} {...artigo} />
      ))}
    </div>
  );
};

export default App;