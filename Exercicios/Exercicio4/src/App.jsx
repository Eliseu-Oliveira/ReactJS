import React, { useState } from 'react';
import ColorChanger from './ColorChanger';

const App = () => {
  const [showColorChanger, setShowColorChanger] = useState(true);

  const handleRemoveColorChanger = () => {
    setShowColorChanger(false);
  };

  const buttonStyle = {
    backgroundColor: 'grey',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div>
      {showColorChanger && <ColorChanger />}
      <button style={buttonStyle} onClick={handleRemoveColorChanger}>
        Remover ColorChanger
      </button>
    </div>
  );
};

export default App;
