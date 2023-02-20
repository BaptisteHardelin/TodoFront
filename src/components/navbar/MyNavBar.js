import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav.Item>
          <h1>TODO</h1>
        </Nav.Item>
        <Nav.Item>
          <Link to="/allTodos">Les todos</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/newTodo">Ajouter todos</Link>
        </Nav.Item>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
