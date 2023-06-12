import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/artigos');
  };

  return (
    <div>
      <Link to="/">Home</Link> {'>'}
      {location.pathname === '/artigos' ? (
        <span>Artigos</span>
      ) : (
        <span onClick={handleClick}>Artigos</span>
      )}
    </div>
  );
};

export default Breadcrumb;