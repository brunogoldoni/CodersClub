import { useState, useMemo } from 'react';

import './App.css';

function App() {
  const [title, setTitle] = useState('');

  const result = useMemo(() => {
    console.log('useMemo');

    return 4334534 * 345345;
  }, [title])

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
