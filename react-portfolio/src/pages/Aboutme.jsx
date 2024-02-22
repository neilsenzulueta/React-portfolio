import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import '../styles/aboutme.css'; 

export default function Aboutme() {
  return (
    <Container>
      <Row className="align-items-center"> 
        <Col xs={8} md={3} className="mb-3 mb-md-0"> 
          <Image src="./public/assets/neilsenimage.jpeg" roundedCircle className="aboutme-image" />
        </Col>
        <Col xs={12} md={8}>
          <Card>
            <Card.Header>About Me</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  I'm a passionate and driven coding bootcamp student with a strong commitment to succeed. I believe the main standard to succeed in learning web development is hard work and willing to give my all in order to achieve positive results.
                </p>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
