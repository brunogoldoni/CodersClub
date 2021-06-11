import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function addCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  useEffect(() => {
    console.log('Was dismantled...');

    return () => {
      console.log('');
    }
  }, [])

  // useEffect(() => {
  //   async function getApiData() {
  //     await console.log()
  //   }

  //   getApiData();
  // }, [])

  return (
    <div className="App">
      Email: {counter} {' '}
      <input id="test" type="text" /> {' '}
      <button onClick={addCounter}>Aumenta contador</button>
    </div >
  );
}

export default App;
