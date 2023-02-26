import axios from "axios";
import { useEffect, useState } from "react";
import Todo from "./todo";
import StatusTodos from "./StatusTodos";
import { useNavigate } from "react-router-dom";

const AllTodos = () => {
  const [todos, setTodos] = useState([]);
  const [toggle, setToggle] = useState(true);

  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const prevUrl = localStorage.getItem("reload");

  useEffect(() => {
    if (prevUrl) {
      window.location.reload();
      localStorage.removeItem("reload");
    }
    axios.get("http://localhost:8000/getAllTodos").then((res) => {
      setTodos(res.data);
      setToggle(false);
    });
    if (user === null) {
      navigate("/login");
    }
  }, [toggle, user, navigate, prevUrl]);

  // todo or in progress or done
  // Get the todo to update with the id
  const updateStatus = (id, newStatus) => {
    axios
      .patch(
        `http://localhost:8000/updateStatusTodo/${id}`,
        {
          status: newStatus,
        },
        {
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      )
      .then(() => {
        // reload data
        setToggle(true);
      });
  };

  const handleClick = (id) => {
    axios.get(`http://localhost:8000/getOneTodo/${id}`).then((res) => {
      let newStatus = "";
      if (res.data[0].status === "todo") {
        newStatus = "in_progress";
        updateStatus(id, newStatus);
      }
      if (res.data[0].status === "in_progress") {
        newStatus = "done";
        updateStatus(id, newStatus);
      }
    });
  };

  return (
    <div className="tasks">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="left"></div>
      <div className="right"></div>
      <div className="todo">
        <h1 className="columStatus">TODO</h1>
        <StatusTodos
          arrayTodo={todos}
          givenStatus="todo"
          handleClick={handleClick}
          setToggle={setToggle}
        />
      </div>

      <div className="in_progress">
        <h1 className="columStatus">In progress</h1>
        <StatusTodos
          arrayTodo={todos}
          givenStatus="in_progress"
          handleClick={handleClick}
          setToggle={setToggle}
        />
      </div>

      <div className="done">
        <h1 className="columStatus">Done</h1>
        <div>
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                {todo.status === "done" ? (
                  <Todo {...todo} key={todo.id} setToggle={setToggle} />
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTodos;
