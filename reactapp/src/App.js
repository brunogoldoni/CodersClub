import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  function handleCounter() {
    setTimeout(() => {
      setCounter((oldCounter) => oldCounter + 1);
    }, 2000);
  }

  return (
    <div>
      <h1>Hello React App</h1>
      Contador: {counter}
      <div>
        <button onClick={handleCounter}>Soma Contador</button>
      </div>
    </div>
  );
}

export default App;
