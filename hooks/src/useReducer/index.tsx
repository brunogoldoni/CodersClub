import { useReducer } from 'react';

import './App.css';

function reducerCounter(state: number, action: { type: string }) {
  switch (action.type) {
    case 'SUM_1':
      return state + 1;
    case 'SUB_1':
      return state - 1;
    case 'MULT_1':
      return state * 10;
    default:
      throw new Error('Invalid Action');
  }
}

function App() {
  const [counter, dispatchCounter] = useReducer(reducerCounter, 0);

  return (
    <div className="App">
      Contador: {counter} {' '}

      <button onClick={() => dispatchCounter({ type: 'SUM_1' })}>Sum 1</button> {' '}
      <button onClick={() => dispatchCounter({ type: 'SUB_1' })}>Sub 1</button> {' '}
      <button onClick={() => dispatchCounter({ type: 'MULT_1' })}>Mult 10</button>
    </div >
  );
}

export default App;
