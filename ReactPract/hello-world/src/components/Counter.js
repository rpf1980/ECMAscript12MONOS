import React from 'react';

// Componente de función ( forma habitual de crear componentes )
const Counter = ({ counter, changeCounter }) => (
    <div>
        <h1> Contador: {counter}</h1>
        <h2> Buenas tardes </h2>
        <button onClick={() => changeCounter(-1)}>-1</button>
        <button onClick={() => changeCounter(+1)}>+1</button>
      </div>
);

export default Counter;
