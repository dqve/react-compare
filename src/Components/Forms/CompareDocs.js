import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup} from 'react-bootstrap';
//import stringSimilarity from "string-similarity";
//import ReactDiffViewer from 'react-diff-viewer';

import Aux from "../../hoc/_Aux";

function compareDocs(props) {

    function reload() {
        window.location.reload(false);
    }

    function parseFile1(input){
        if(input){
        
        let file = input.files[0]
        
        let reader = new FileReader();

        reader.readAsText(file);

        const result = reader.result

        reader.onload = function() {
            console.log(reader.result);
            return result
        };

        reader.onerror = function() {
            console.log(reader.error);
        };
        }else{
        
            return ""
        } 

    }

    function parseFile2(input){
        if(input){
        
        let file = input.files[0]
        
        let reader = new FileReader();

        reader.readAsText(file);

        const result = reader.result

        reader.onload = function() {
            console.log(reader.result);
            return result
        };

        reader.onerror = function() {
            console.log(reader.error);
        };
        }else{
        
            return ""
        } 
    }

    function handleCompare(){
       props.noClickMe()
       props.requestScore(parseFile1, parseFile2)
    }
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
                                                    <input type="file" id="file1" onChange={() => {parseFile1(this)}}/><InputGroup.Append />
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
                                                    <input type="file" id="file2" onChange={() => {parseFile2(this)}}/><InputGroup.Append />
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
                    <Button variant="primary" size="lg" onClick={handleCompare}>Compare</Button>
                    <Button variant="secondary" size="lg" onClick={reload}>Clear</Button>
                    </Col>
                    </Row>
            </Aux>
        );
    }

export default compareDocs;