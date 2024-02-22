import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/portfolio.css';

export default function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <h1 className="portfolio">My Portfolio</h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card className="cardStyle">
                <Card.Img variant="top" src="./public/assets/expense-tracker image.JPG" className="appImg" />
                <Card.Body>
                  <Card.Title>Expense Tracker</Card.Title>
                  <Card.Text>
                    Track and manage your expenses. The Expense Tracker will provide a user-friendly interface for logging expenses, categorizing them, and generating reports to help users understand their spending habits.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="https://github.com/neilsenzulueta/Expense-Tracker" target="_blank" style={{ color: "#876d37" }}>GitHub</Card.Link>
                  &nbsp;
                  <Card.Link href="https://tracker-of-expenses-5d12b9bcba5b.herokuapp.com/" target="_blank" style={{ color: "#876d37" }}>WebSite</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="cardStyle">
                <Card.Img variant="top" src="./public/assets/stockmarketimage.JPG" className="appImg" />
                <Card.Body>
                  <Card.Title>Stock Market Dashboard</Card.Title>
                  <Card.Text>
                    Track and monitor your stocks and receive real-time financial news.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="https://github.com/neilsenzulueta/Stock-Market-Dashboard" target="_blank" style={{ color: "#876d37" }}>GitHub</Card.Link>
                  &nbsp;
                  <Card.Link href="https://travisfowlston.github.io/Stock-Market-Dashboard/" target="_blank" style={{ color: "#876d37" }}>WebSite</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card className="cardStyle">
                <Card.Img variant="top" src="./public/assets/notetakerimage.png" className="appImg" />
                <Card.Body>
                  <Card.Title>Note-Taker</Card.Title>
                  <Card.Text>
                    Write and save your daily notes.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="https://github.com/neilsenzulueta/Note-Taker" target="_blank" style={{ color: "#876d37" }}>GitHub</Card.Link>
                  &nbsp;
                  <Card.Link href="https://enigmatic-mountain-46970-25b06df22a9e.herokuapp.com/" target="_blank" style={{ color: "#876d37" }}>WebSite</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="cardStyle">
                <Card.Img variant="top" src="./public/assets/weatherdashboardimage.png" className="appImg" />
                <Card.Body>
                  <Card.Title>Weather Dashboard</Card.Title>
                  <Card.Text>
                    Check the current and 5 day forecast for any city.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="https://github.com/neilsenzulueta/WeatherDashboard" target="_blank" style={{ color: "#876d37" }}>GitHub</Card.Link>
                  &nbsp;
                  <Card.Link href="https://neilsenzulueta.github.io/WeatherDashboard/" target="_blank" style={{ color: "#876d37" }}>WebSite</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card className="cardStyle">
                <Card.Img variant="top" src="./public/assets/workdayimage.png" className="appImg" />
                <Card.Body>
                  <Card.Title>Work Day Scheduler</Card.Title>
                  <Card.Text>
                    A simple daily calendar that lets you save events.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="https://github.com/neilsenzulueta/WorkDayScheduler" target="_blank" style={{ color: "#876d37" }}>GitHub</Card.Link>
                  &nbsp;
                  <Card.Link href="https://neilsenzulueta.github.io/WorkDayScheduler/" target="_blank" style={{ color: "#876d37" }}>WebSite</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="cardStyle">
                <Card.Img variant="top" src="./public/assets/passwordgeneratorimage.png" className="appImg" />
                <Card.Body>
                  <Card.Title>Password Generator</Card.Title>
                  <Card.Text>
                    This tool allows you to generate a random password.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="https://github.com/neilsenzulueta/module3challenge" target="_blank" style={{ color: "#876d37" }}>GitHub</Card.Link>
                  &nbsp;
                  <Card.Link href="https://neilsenzulueta.github.io/module3challenge/" target="_blank" style={{ color: "#876d37" }}>WebSite</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
