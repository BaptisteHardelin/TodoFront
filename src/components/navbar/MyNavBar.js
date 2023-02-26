import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const user = localStorage.getItem("user");
  return (
    <Navbar className="myNavbar">
      <Container>
        <Nav.Item className="navItem">
          <h1>TODO {user}</h1>
        </Nav.Item>
        {user !== null
          ? [
              <Nav.Item key="1">
                <Link to="/allTodos" className="navLink">
                  Les todos
                </Link>
              </Nav.Item>,
              <Nav.Item key="2">
                <Link to="/newTodo" className="navLink">
                  Ajouter todos
                </Link>
              </Nav.Item>,
              <Nav.Item key="3">
                <Link to="/logout" className="navLink">
                  Logout
                </Link>
              </Nav.Item>,
            ]
          : ""}

        {user === null
          ? [
              <Nav.Item key="4">
                <Link to="/register" className="navLink">
                  Register
                </Link>
              </Nav.Item>,
              <Nav.Item key="5">
                <Link to="/login" className="navLink">
                  Login
                </Link>
              </Nav.Item>,
            ]
          : ""}
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
