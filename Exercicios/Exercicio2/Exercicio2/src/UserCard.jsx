import React from 'react';
import './UserCard.css';

const UserCard = ({ user, isPremium }) => {
  return (
    <div className="user-card">
      <h2>Cartão de Usuário</h2>
      <p className="user-field">
        <span className="field-label">Name:</span> {user.name}
      </p>
      <p className="user-field">
        <span className="field-label">Age:</span> {user.age}
      </p>
      <p className="user-field">
        <span className="field-label">City:</span> {user.city}
      </p>
      <p className="user-field">
        <span className="field-label">Emprego:</span> {user.occupation}
      </p>
      <p className="user-field">
        <span className="field-label">Interesses:</span> {user.interests.join(', ')}
      </p>
      {isPremium && (
        <p className="premium-text">
          Este usuário é Premium Platinum
        </p>
      )}
    </div>
  );
};

export default UserCard;