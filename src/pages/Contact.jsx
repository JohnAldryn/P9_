import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css';

function Contact() {
    return (
        <Container
            fluid
            id="Contact"
            className="py-5"
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.0)',
                color: 'white',
            }}
        >
            <Row className="justify-content-center text-center">
                <Col md={8}>
                    <h1 className="mb-4" style={{ fontWeight: 'bold', fontSize: '50px', color:'black' }}>Contacts:</h1>
                    <Card
                        className="text-light shadow-lg"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.4',
                            border: '1px solid rgba(255, 255, 255, 0.3)', 
                        }}
                    >
                        <Card.Body>
                            <Card.Title className="mb-4">
                                <strong style={{color:'black'}}>John Aldryn D. Delos Poyos</strong>
                                <br />
                                <small className="text-muted">Web Developer</small>
                            </Card.Title>
                            <Card.Text style={{color:'black'}}>
                                <strong style={{color:'black'}}>Address:</strong> Vilmar Homes, Calauag, Naga City
                            </Card.Text>
                            <Card.Text style={{color:'black'}}> 
                                <strong style={{color:'black'}}>Phone Number:</strong> 09512804264
                            </Card.Text>
                            <Card.Text style={{color:'black'}}>
                                <strong style={{color:'black'}}>Email:</strong> jadelospoyos@gbox.ncf.edu.ph
                            </Card.Text>
                            <Card.Text style={{color:'black'}}>
                                <strong style={{color:'black'}}>Facebook:</strong> Aldryn
                            </Card.Text>
                            <Button variant="primary" className="mt-3">
                                Hit Me Up!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
