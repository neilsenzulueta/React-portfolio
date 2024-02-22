import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/resume.css';

export default function Resume() {
  const onButtonClick = () => {
    const pdfUrl = ""; 
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = ""; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="resBody">
      <Row>
        <Col>
          <h2>Front End Proficiencies</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          
          <h2>Back End Proficiencies</h2>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>

          <h4>Click below to download a copy of my resume.</h4>
          <Button onClick={onButtonClick} className="download" variant="primary" style={{color: "#876d37"}}>
            Download Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
