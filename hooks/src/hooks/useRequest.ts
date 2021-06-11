import { useEffect, useState, useDebugValue } from 'react';

function useRequest(url: string) {
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function getUserData() {
      const response = await fetch(url);
      const data = await response.json();

      setUserData(data);
    }

    getUserData();
  }, [url]);

  useDebugValue('Request Hook');

  return { userData }
}

export default useRequest;