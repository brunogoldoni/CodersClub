import { useState, useCallback } from 'react';

import './App.css';

function App() {
  const [title, setTitle] = useState('');

  const addCounter = useCallback(() => {
    console.log('increase counter callback');
  }, [])

  addCounter();

  return (
    <div className="App">
      <input is="test" type="text" onChange={(event) => setTitle(event.target.value)} />
      <Component title={title} />
    </div >
  );
}

export default App;

function Component(props: { title: string }) {
  return <h1>{props.title}</h1>
}
