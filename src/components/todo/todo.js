import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// setToggle -> pour reload les datas
const Todo = ({ title, content, status, id, setToggle }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    axios.delete(`http://localhost:8000/deleteTodo/${id}`).then(() => {
      setToggle(true);
    });
  };

  const [titleToUpdate, setTitleToUpdate] = useState(title);
  const [contentToUpdate, setContentToUpdate] = useState(content);

  const handleChangeTitle = (e) => {
    setTitleToUpdate(e.currentTarget.textContent);
  };

  const handleChangeContent = (e) => {
    setContentToUpdate(e.currentTarget.textContent);
  };

  const handleUpdate = () => {
    axios
      .patch(`http://localhost:8000/updateTodo/${id}`, {
        title: titleToUpdate,
        content: contentToUpdate,
        status,
      })
      .then(() => navigate("/allTodos"));
  };

  return (
    <>
      <Card style={{ width: "18rem" }} className={status}>
        <Card.Body>
          <Button variant="outline-primary" onClick={() => handleUpdate()}>
            Update
          </Button>
          <Card.Title
            contentEditable={true}
            suppressContentEditableWarning={true}
            onInput={(e) => handleChangeTitle(e)}
          >
            {title}
          </Card.Title>
          <Card.Text
            contentEditable={true}
            suppressContentEditableWarning={true}
            onInput={(e) => handleChangeContent(e)}
          >
            {content}
          </Card.Text>
          <Button variant="outline-danger" onClick={() => handleDelete()}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Todo;
