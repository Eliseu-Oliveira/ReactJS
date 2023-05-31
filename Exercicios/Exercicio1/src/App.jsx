import React from 'react';
import Movie from './components/Movie';

const movies = [
  {
    title: 'Filme 1',
    director: 'Diretor 1',
  },
  {
    title: 'Filme 2',
    director: 'Diretor 2',
  },
  {
    title: 'Filme 3',
    director: 'Diretor 3',
  },
];

const App = () => {
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          director={movie.director}
        />
      ))}
    </div>
  );
};

export default App;
