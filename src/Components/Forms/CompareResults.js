import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl} from 'react-bootstrap';
import CountUp from 'react-countup';

import Aux from "../../hoc/_Aux";

function compareResults(props) {
        return (
            <Aux>
                <Row className="justify-content-md-center">
                    <Col xl={8}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Comparison Results</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <CountUp end={props.similarity} />
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }

export default compareResults;