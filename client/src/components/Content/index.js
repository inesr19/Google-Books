import React from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";

function Content() {
    return(
        <div>
            <Container style={{boxShadow: '0 0 10px', margin: '5px'}}>
                <Col>
                <Row>
                    <h4>Harry Potter</h4>
                </Row>
                <Row>Written by: JK Rowling</Row>
                <Card.Img></Card.Img>
                <Card.Text>djfdkjfsdlk</Card.Text>
                </Col>
                <Button>View</Button>
                <Button>Save</Button>
            </Container>
        </div>
    )
}

export default Content;