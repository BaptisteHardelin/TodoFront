import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/navbar/MyNavBar";
import { Route, Routes } from "react-router-dom";
import AllTodos from "./components/todo/AllTodos";
import NewTodo from "./components/todo/NewTodo";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Logout from "./components/user/Logout";

const App = () => {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route exact path="/allTodos" element={<AllTodos />} />
        <Route exact path="/newTodo" element={<NewTodo />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default App;
