import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Button, Card } from "react-bootstrap";

function Content(props) {
    const [book, setBook] = useState({});

    const {id} = useParams()
    useEffect(() => {
      API.getBook(id)
        .then(res => setBook(res.data))
        .catch(err => console.log(err));
    }, [])
    
    return(
        <div>
            <Container style={{boxShadow: '0 0 10px', margin: '5px'}}>
                <Col>
                <Row>
                    <h4>{book.title}</h4>
                </Row>
                <Row>Written by: {book.author}</Row>
                <Card.Img src={book.image}></Card.Img>
                <Card.Text>{book.description}</Card.Text>
                </Col>
                <Button>{props.btn}</Button>
                <Button>{props.btn2}</Button>
            </Container>
        </div>
    )
}

export default Content;