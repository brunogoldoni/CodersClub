import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function addCounter() {
    setCounter((prevCounter) => prevCounter + 1);

    console.log(counter);
  }

  return (
    <div className="App">
      Contador: { counter} {' '}
      <button onClick={addCounter}>Aumentar</button>
    </div >
  );
}

export default App;
