import Todo from "./todo";
import Button from "react-bootstrap/Button";

// givenStatus -> todo, in_progress
// setToggle -> pour reload les datas
const StatusTodos = ({ arrayTodo, givenStatus, handleClick, setToggle }) => {
  return (
    <>
      <div>
        {arrayTodo.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.status === givenStatus
                ? [
                    <Todo {...todo} key={todo.id} setToggle={setToggle} />,
                    <Button
                      key={todo.id + "-button"}
                      variant="primary"
                      onClick={() => {
                        handleClick(todo.id);
                      }}
                    >
                      {givenStatus === "todo" ? "vers in progress" : ""}
                      {givenStatus === "in_progress" ? "vers done" : ""}
                    </Button>,
                  ]
                : ""}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StatusTodos;
