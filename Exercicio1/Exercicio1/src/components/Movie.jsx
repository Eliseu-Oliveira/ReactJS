import React from 'react';
import { MovieContainer, MovieTitle, MovieInfo } from './MovieStyles';

const Movie = ({ title, director }) => {
  return (
    <MovieContainer>
      <MovieTitle>{title}</MovieTitle>
      <MovieInfo>Título: {title}</MovieInfo>
      <MovieInfo>Diretor: {director}</MovieInfo>
    </MovieContainer>
  );
};

export default Movie;
