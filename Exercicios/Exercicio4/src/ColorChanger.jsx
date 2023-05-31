import React, { useState, useEffect } from 'react';

const ColorChanger = () => {
    const [isBlue, setIsBlue] = useState(false);

    useEffect(() => {
        console.log("Componente montado");

        return () => {
            console.log("Componente desmontado");
        };
    }, []);

    useEffect(() => {
        console.log("Componente atualizado");

        document.body.style.backgroundColor = isBlue ? "blue" : "red";

        return () => {
            console.log("Efeito anterior limpo");
        };
    }, [isBlue]);

    const handleClick = () => {
        setIsBlue(!isBlue);
    };

    return (
        <div>
            <button onClick={handleClick}>Alterar cor de fundo</button>
        </div>
    );
};

export default ColorChanger;
