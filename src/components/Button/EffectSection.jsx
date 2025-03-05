import Button from "./Button";
import Modal from "../Modal/Modal";
import { useEffect, useState, useCallback } from "react";
import useInput from "../../hooks/useInput";

export default function EffectSection() {
  const input = useInput("");
  const [modal, setModal] = useState(false);
  const [load, setLoad] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoad(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    setUsers(users);
    setLoad(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effect</h3>

      <Button
        style={{ marginBottom: "1rem" }}
        clickButton={() => setModal(true)}
      >
        Open Info
      </Button>
      <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          provident nisi saepe totam nulla voluptas itaque molestias nostrum!
          Laudantium ipsam et consequatur quidem. Consequuntur delectus quidem,
          necessitatibus quis sequi asperiores.
        </p>
        <Button clickButton={() => setModal(false)}>Close Modal</Button>
      </Modal>
      {load && <p>Loading...</p>}

      {!load && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value?.toLowerCase() || "")
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
