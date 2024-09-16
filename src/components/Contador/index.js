import React, { useState, useEffect } from 'react';
import './style.css';

function Contador() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;

    const notificationDiv = document.createElement('div');
    notificationDiv.className = 'notification';
    notificationDiv.textContent = `Título atualizado para: ${document.title}`;
    document.body.appendChild(notificationDiv);

    setTimeout(() => {
      document.body.removeChild(notificationDiv);
    }, 1000);
  }, [count]);

  useEffect(() => {

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contador-container">
      <h1>Contador: {count}</h1>
    </div>
  );
}

export default Contador;
