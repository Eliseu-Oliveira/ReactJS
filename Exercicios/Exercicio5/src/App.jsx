import React, { useState, useRef } from 'react';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const termosRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const nomeValor = nome;
    const emailValor = email;
    const senhaValor = senha;
    const termosValor = termosRef.current.checked;

    console.log('Nome:', nomeValor);
    console.log('E-mail:', emailValor);
    console.log('Senha:', senhaValor);
    console.log('Aceitar termos:', termosValor);

    setNome('');
    setEmail('');
    setSenha('');
    termosRef.current.checked = false;
  };

  return (
    <div>
      <h1>Formulário</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome completo:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          required
        /><br />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        /><br />

        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          required
        /><br />

        <label htmlFor="termos">Aceitar os termos de uso:</label>
        <input
          type="checkbox"
          id="termos"
          name="termos"
          ref={termosRef}
          required
        /><br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
