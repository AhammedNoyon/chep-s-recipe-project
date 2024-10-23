import { useEffect, useState } from "react";
import UserEffect from "./userEffect";

export default function UsersEffect() {
  const [users, setUsers] = useState([]);
  // console.log(users);
  // console.log(setUsers);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {users.map((user, index) => (
        <UserEffect key={index} user={user}></UserEffect>
      ))}
    </div>
  );
}
