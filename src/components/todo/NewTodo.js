import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewTodo = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [canSubmit, setCanSubmit] = useState(true);
  const [error, setError] = useState(false);

  const handleTitle = (e) => {
    if (e.target.value.length > 20) {
      setError(true);
      setCanSubmit(false);
    } else {
      setError(false);
      setCanSubmit(true);
      setTitle(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/createTodo", {
        title,
        content,
        status: "todo",
      })
      .then((response) => {
        setTitle("");
        setContent("");
        navigate("/allTodos");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titre :
        <input type="text" value={title} onChange={(e) => handleTitle(e)} />
      </label>
      <br />
      <label>
        Contenu :
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <br />
      {error && (
        <div>
          <br />
          <p>
            Ne peut pas créer une tâche car le titre est trop long inférieur ou
            égal à 20 caractères
          </p>
        </div>
      )}
      {canSubmit && <button type="submit">Ajouter une tâche</button>}
    </form>
  );
};

export default NewTodo;
