import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Linkedin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">My Network</Nav.Link>
              <Nav.Link href="#Jobs">Jobs</Nav.Link>
              <Nav.Link href="#link">Messaging</Nav.Link>
              <Nav.Link href="#link">Notifications</Nav.Link>
              <NavDropdown title="Me" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
