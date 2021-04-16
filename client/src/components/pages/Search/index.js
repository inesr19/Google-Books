import React from "react";
import { Form, Button } from "react-bootstrap";
import Content from "../../Content";
import Jumbo from "../../Jumbotron";
import Nav from "../Nav/index";

function Search() {
    return (
        <div>
        <Nav />
        <Jumbo />
        <Form>
        <Form.Label>Book Search</Form.Label>
            <Form.Group>
                <Form.Text className="text-muted">
                Book
                </Form.Text>
                <Form.Control type="text" placeholder="Enter book title" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
        <Content />
        </div>
    )
}

export default Search;