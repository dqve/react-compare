import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import CountUp from 'react-countup';

import Aux from "../../hoc/_Aux";

function compareResults(props) {

        return (
            <Aux>
                <Row className="justify-content-md-center">
                    <Col xl={8}>
                        <Card className="text-center">
                            <Card.Header>
                                <Card.Title as="h5">Comparison Results</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form  className="justify-content-md-center">
                                            <div className="justify-content-md-center" style={{padding: "50px 25%"}}>
                                                <h1 style={{fontSize: "500%", fontWeight: "900px"}}>
                                                    <CountUp end={props.similarity || 100}/> %
                                                </h1>
                                                <h3>This is the percentage similarity between the two documents</h3>
                                            </div>
                                            <Button  onCompareClick={props.onCompareClick}>Compare</Button>
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