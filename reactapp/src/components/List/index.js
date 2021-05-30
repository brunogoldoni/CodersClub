import { useState, useEffect, useCallback, useMemo } from "react";

const set = new Set();

function List() {
  const [counter, setCounter] = useState(1);

  const handleSetCounter = useCallback(() => {
    setCounter((oldCounter) => oldCounter + 1);
    set.add(handleSetCounter);
  }, []);

  console.log("COUNTER", set.size);

  // const number = useMemo(() => 1234588 * 9763, []);
  // console.log("NUMBER", number);

  return (
    <>
      <div>Contador: {counter}</div>
      <div>
        <button onClick={handleSetCounter}>Soma Contador</button>
      </div>
    </>
  );
}

export default List;
