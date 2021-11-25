import React from 'react';
import { render } from 'react-dom';

function SaludarEnIdiomas({ idioma }) {
  if (idioma === 'es') {
    return <span>Hola</span>;
  } else {
    return <span>Hello</span>;
  }
}

const Saludo = () => {
  const nombre = 'Oscar';
  return (
    <p>
      {' '}
      <SaludarEnIdiomas idioma="es" /> {`${nombre}`}{' '}
    </p>
  );
};

const App = () => {
  return (
    <h1>
      <Saludo />
    </h1>
  );
};

render(<App />, document.getElementById('react-app'));
