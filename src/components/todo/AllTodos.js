import axios from "axios";
import { useEffect, useState } from "react";
import Todo from "./todo";
import StatusTodos from "./StatusTodos";

const AllTodos = () => {
  const [todos, setTodos] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/getAllTodos").then((res) => {
      setTodos(res.data);
      setToggle(false);
    });
  }, [toggle]);

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
      <div className="todo">
        <h1>TODO</h1>
        <StatusTodos
          arrayTodo={todos}
          givenStatus="todo"
          handleClick={handleClick}
          setToggle={setToggle}
        />
      </div>

      <div className="in_progress">
        <h1>In progress</h1>
        <StatusTodos
          arrayTodo={todos}
          givenStatus="in_progress"
          handleClick={handleClick}
          setToggle={setToggle}
        />
      </div>

      <div className="done">
        <h1>Done</h1>
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