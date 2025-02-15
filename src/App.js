import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Navbar variant='dark' bg='dark'>
      <Nav>
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/Register'>Register</Nav.Link>
      </Nav>

    </Navbar>
  );
}

export default App;
