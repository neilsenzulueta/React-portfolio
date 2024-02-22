import Card from 'react-bootstrap/Card';
import '../styles/aboutme.css'

export default function Aboutme() {
  return (
    <Card>
      <Card.Header>About Me</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            I'm a passionate and driven coding bootcamp student with a strong commitment to succeed. I believe the main standard to succeed in learning web development is hard work and willing to give my all in order to achieve positive results.{' '}
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

