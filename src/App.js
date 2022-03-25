import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserForm from "./UserForm";
import User from "./User";

function App() {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    axios.get("/usersmysql").then((res) => {
      setUsers(res.data.result);
    });
  };
  const clearAllUsers = () => {
    axios.delete("/usersmysql/delete/all").then((res) => {
      loadUsers();
    });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const onClickDelete = (id) => {
    axios
      .delete(`/usersmysql/${id}`)
      .then((res) => {
        if (res.data.error !== null) {
          console.log(res.data.error);
          alert("Error while deleting author");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    loadUsers();
  };
  return (
    <div className='App'>
      <UserForm loadusers={loadUsers} />
      <div className='authors-list'>
        {users.map((user) => {
          return <User key={user.id} user={user} delete={onClickDelete} />;
        })}
      </div>
      <button
        type='button'
        className='btn btn-danger m-1'
        onClick={clearAllUsers}>
        Clear All
      </button>
    </div>
  );
}

export default App;
