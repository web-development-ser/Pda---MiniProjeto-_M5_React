import React, { useEffect, useState } from 'react';

const Teste = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:7070/anm/listComplet'); // Substitua pela URL da sua API
        const data = await response.json();
        setItems(data.toList); // Acessa o array "toList"
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Animes</h1>
      <div className="card-grid">
        {items.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.title}</h2>
            <p><strong>Estúdio:</strong> {item.studio}</p>
            <p><strong>Sinopse:</strong> {item.synopsis}</p>
            {/* Adicione mais campos, como genre, episodes, etc., se necessário */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teste;
