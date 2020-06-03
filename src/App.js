import React from 'react';
import './app.css';

function App() {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(() =>  setCount(oldValue => oldValue  + 1), [setCount])

  const decrement = React.useCallback(() =>  setCount(oldValue => oldValue  - 1), [setCount])
  
  return (
    <div className="flex app-container">
      <p>{count}</p>

      <div>
        <button onClick={increment}>
          increment
        </button>


          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button onClick={decrement}>
          decrement
        </button>
      </div>
    </div>
  );
}

export default App;
