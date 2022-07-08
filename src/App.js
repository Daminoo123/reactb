import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button,Card } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">amine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr></hr>
    <div className='cards'>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="téléchargement" />
  <Card.Body>
    <Card.Title>phone</Card.Title>
    <Card.Text>
      iphone
    </Card.Text>
    <Button variant="primary">buy the phone</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="téléchargement" />
  <Card.Body>
    <Card.Title>phone</Card.Title>
    <Card.Text>
      iphone
    </Card.Text>
    <Button variant="primary">buy the phone</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="téléchargement" />
  <Card.Body>
    <Card.Title>phone</Card.Title>
    <Card.Text>
      iphone
    </Card.Text>
    <Button variant="primary">buy the phone</Button>
  </Card.Body>
</Card>

    </div>
  
  
    </div>
  );
}

export default App;
