import { useRef } from 'react';
import Input from '../components/Input';

function App() {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="App">
      <Input ref={ref} />

      <button onClick={() => ref.current && ref.current.focus()}>Focus</button>
    </div>
  );
}

export default App;
