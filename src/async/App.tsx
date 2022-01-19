import React, { useState } from "react";

type User = {
  id: string;
  name: string;
  createdAt: Date;
};

function App() {
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://61e3f956fbee6800175eb15a.mockapi.io/users"
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const body = await response.json();
      setUsers(body);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={"App"}>
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить данные</button>
    </div>
  );
}

export default App;
