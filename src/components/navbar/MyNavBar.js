import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const user = localStorage.getItem("user");
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav.Item>
          <h1>TODO {user}</h1>
        </Nav.Item>
        {user !== null
          ? [
              <Nav.Item key="1">
                <Link to="/allTodos">Les todos</Link>
              </Nav.Item>,
              <Nav.Item key="2">
                <Link to="/newTodo">Ajouter todos</Link>
              </Nav.Item>,
              <Nav.Item key="3">
                <Link to="/logout">Logout</Link>
              </Nav.Item>,
            ]
          : ""}

        {user === null
          ? [
              <Nav.Item key="4">
                <Link to="/register">Register</Link>
              </Nav.Item>,
              <Nav.Item key="5">
                <Link to="/login">Login</Link>
              </Nav.Item>,
            ]
          : ""}
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
