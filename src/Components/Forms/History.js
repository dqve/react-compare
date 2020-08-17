import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class History extends React.Component {

    render() {

        return (
            <Aux>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Document One</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                        <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter name of student" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Select Document</Form.Label>
                                                <InputGroup className="mb-3">
                                                    <FormControl type="file" /><InputGroup.Append />
                                                </InputGroup>
                                                <Form.Text className="text-muted">
                                                    By selecting a document, you agree to allow us save it's contents on our servers
                                                </Form.Text>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Document Two</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                        <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter name of student" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Select Document</Form.Label>
                                                <InputGroup className="mb-3">
                                                    <FormControl type="file" /><InputGroup.Append />
                                                </InputGroup>
                                                <Form.Text className="text-muted">
                                                    By selecting a document, you agree to allow us save it's contents on our servers
                                                </Form.Text>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                            <Col md="auto" expand="lg">
                    <Button variant="primary" size="lg">Compare</Button>
                    <Button variant="secondary" size="lg">Clear</Button>
                    </Col>
                    </Row>
            </Aux>
        );
    }
}

export default History