import useRequest from './hooks/useRequest';

function App() {

  const { userData } = useRequest('https://api.github.com/users/brunogoldoni');

  console.log(userData);

  return (
    <div className="App">
    </div>
  );
}

export default App;
