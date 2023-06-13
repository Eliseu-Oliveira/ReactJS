import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const MyComponent = () => {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchFruits = async () => {
      setTimeout(async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/todos");
          if (!response.ok) {
            throw new Error("Error while fetching data");
          }
          const data = await response.json();
          setFruits(data);
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      }, 5000); // Tempo de espera de 5 segundos (5000 milissegundos)

    };

    fetchFruits();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Renderiza o spinner enquanto os dados estão sendo carregados
  }

  if (error) {
    return <div>Error while fetching data. Please try again later.</div>; // Renderiza a mensagem de erro caso ocorra um problema ao carregar os dados
  }

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.title}</li>
        ))}
      </ul>
      <NavLink to={`/fruits/${fruits[0]?.id}`}>Ver detalhes</NavLink> {/* Adiciona um NavLink para a página de detalhes com base no primeiro objeto retornado */}
    </div>
  );
};

export default MyComponent;
