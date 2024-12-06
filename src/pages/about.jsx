import React from 'react';
import { 
  Col, 
  Container, 
  Image, 
  Row, 
  ListGroup, 
  Card, 
  Button, 
  Accordion, 
  ProgressBar, 
  Form, 
  Alert 
} from 'react-bootstrap';
import profile from '../assets/vv.jpg';

function About() {
  return (
    <>
      
      <Alert variant="primary" className="text-center">
        <h2>Welcome to My Profile!</h2>
      </Alert>

    
      <div className="font-family">
        <Container className="p-4">
          <Row>
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <Image src={profile} roundedCircle fluid width="200" height="200" />
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center">
              <h2>Hello, I'm John Aldryn D. Delos Poyos</h2>
              <p>Software Developer | Tech Enthusiast | Lifelong Learner</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Basic Information Section */}
      <Container className="mt-4">
        <Card className="text-center">
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              Hello! I'm John Aldryn D. Delos Poyos, a 20-year-old aspiring developer from Naga City.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Collapsible Information */}
        <Accordion className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Basic Information</Accordion.Header>
            <Accordion.Body>
              <strong>NAME:</strong> Delos Poyos, John Aldryn Dela Rosa <br />
              <strong>LOCATION:</strong> Vilmar Homes Calauag Naga City <br />
              <strong>AGE:</strong> 20 <br />
              <strong>Civil Status:</strong> Single <br />
              <strong>BIRTHDAY:</strong> January 29, 2004
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

     
      <Container className="mt-4">
        <h3>Skills</h3>
        <div className="my-2">
          <span>React</span>
          <ProgressBar now={25} label="25%" />
        </div>
        <div className="my-2">
          <span>Bootstrap</span>
          <ProgressBar now={25} label="25%" />
        </div>
        <div className="my-2">
          <span>JavaScript</span>
          <ProgressBar now={25} label="25%" />
        </div>
      </Container>

     
      <Container className="mt-3 text-center">
        <h3>Connect with Me</h3>
        <Button href="https://facebook.com" target="_blank" variant="primary" className="m-2">
          Facebook
        </Button>
        <Button href="https://linkedin.com" target="_blank" variant="info" className="m-2">
          LinkedIn
        </Button>
        <Button href="https://github.com" target="_blank" variant="dark" className="m-2">
          GitHub
        </Button>
      </Container>

      <Container className="mt-4">
        <h3>Contact Me</h3>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formMessage" className="mt-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Write your message" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default About;


