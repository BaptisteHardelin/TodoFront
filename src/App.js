import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/navbar/MyNavBar";
import { Route, Routes } from "react-router-dom";
import AllTodos from "./components/todo/AllTodos";
import NewTodo from "./components/todo/NewTodo";

const App = () => {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route exact path="/allTodos" element={<AllTodos />} />
        <Route exact path="/newTodo" element={<NewTodo />} />
      </Routes>
    </>
  );
};

export default App;
