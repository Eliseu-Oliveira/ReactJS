import './App.css'
import React from 'react';
import UserCard from './UserCard';


const App = () => {
  const users = [
      {
        name: 'John Doe',
        age: 30,
        city: 'Jundiaí',
        isPremium: false,
        occupation: 'Engenheiro',
        interests: ['Codar', 'Ler', 'excursionismo ']
      },
      {
        name: 'Jane Smith',
        age: 25,
        city: 'Brasilia',
        isPremium: true,
        occupation: 'Designer',
        interests: ['Artes', 'Viajar', 'Fotografias']
      },
      {
        name: 'Alex Johnson',
        age: 35,
        city: 'Araguari',
        isPremium: false,
        occupation: 'Professor',
        interests: ['Musica', 'Esporte', 'Cozinhar']
      },
      {
        name: 'Sarah Davis',
        age: 27,
        city: 'Uberlândia',
        isPremium: true,
        occupation: 'Escritora',
        interests: ['Escrever', 'Leitura', 'Pintura']
      },
      {
        name: 'Michael Brown',
        age: 32,
        city: 'Uberaba',
        isPremium: false,
        occupation: 'Contabilista',
        interests: ['Financias', 'Golfe', 'Cozinhar']
      },
      {
        name: 'Emily Wilson',
        age: 29,
        city: 'Ituitaba',
        isPremium: true,
        occupation: 'Marketing Digital',
        interests: ['Marketing', 'Viajar', 'Yoga']
      },    
  ];

  return (
    <div>
      <h1>Usuários</h1>
      {users.map((user, index) => (
        <UserCard
          key={index}
          user={user}
          isPremium={user.isPremium}
        />
      ))}
    </div>
  );
};

export default App;
