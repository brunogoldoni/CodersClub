import { useState, useEffect } from "react";

function List() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log("Atualizou...");
  }, [counter]);

  return (
    <>
      <div>Contador: {counter}</div>
      <div>
        <button onClick={() => setCounter((oldCounter) => oldCounter + 1)}>
          Soma Contador
        </button>
      </div>
    </>
  );
}

export default List;
