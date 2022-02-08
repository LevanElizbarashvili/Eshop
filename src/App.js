import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet,Link} from "react-router-dom";
import {Container, Nav} from "react-bootstrap";



function App() {


  return (

    <Container fluid>
        <header>
            <Nav
                activeKey="/"
            >
                <Nav.Item>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/makers">Makers</Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
        <Outlet/>
    </Container>
  );
}

export default App;
