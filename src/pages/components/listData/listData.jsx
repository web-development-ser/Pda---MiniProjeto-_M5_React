import React, { useEffect, useState } from 'react';

const His = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:7070/anm/listComplet');
        
        if (!response.ok) {
          throw new Error('Erro na rede');
        }
        
        const data = await response.json();
        
        if (data.toList) {
          setItems(data.toList);
        } else {
          throw new Error('Estrutura de dados inesperada');
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Lista de Animes</h1>
      <div className="card-grid">
        {items.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.title}</h2>
            <p><strong>Estúdio:</strong> {item.studio}</p>
            <p><strong>Sinopse:</strong> {item.synopsis}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { His };
