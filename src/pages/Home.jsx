import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

function Home() {
    return (
        <Container fluid id="home" className="d-flex align-items-center justify-content-center">
            <Row className="text-center">
                <Col>
                    <h1  style={{ color: 'white' }}>WHAT R U DOING IN MY WEBSITE?!</h1>
                    <Button variant="danger" size="lg" onClick={() => alert('Check me out!')}>
                        Just Kiddin' Welcome!
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;