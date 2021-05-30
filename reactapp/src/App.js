import { useState, useEffect } from "react";
import api from "./services/api";

function App() {
  const [username, setUsername] = useState("brunogoldoni");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const localStorageUserData = sessionStorage.getItem(
      "@reactapp/githubUserData"
    );

    setUserData(JSON.parse(localStorageUserData) || {});
  }, []);

  async function getUserGithubData() {
    const { data } = await api.get(username);

    sessionStorage.setItem("@reactapp/githubUserData", JSON.stringify(data));

    setUserData(data);
  }

  return (
    <div>
      <h1>Hello React App</h1>

      <div>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <button onClick={getUserGithubData}>Pesquisar usuário</button>
        <div>{userData.name}</div>
        <div>{userData.company}</div>
      </div>
    </div>
  );
}

export default App;
