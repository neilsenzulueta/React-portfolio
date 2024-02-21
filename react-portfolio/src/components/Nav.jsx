import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Aboutme</Navbar.Brand>
        <Navbar.Brand href="#">Portfolio</Navbar.Brand>
        <Navbar.Brand href="#">Contact</Navbar.Brand>
        <Navbar.Brand href="#">Resume</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;
