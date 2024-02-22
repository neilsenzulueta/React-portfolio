import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/header.css'

function Header() {
  return (
    <Container>
      <Row>
        <Col><h1>Neilsen Zulueta</h1></Col>
      </Row>
    </Container>
  );
}

export default Header;