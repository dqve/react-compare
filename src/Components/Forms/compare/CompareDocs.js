import React, { useState } from 'react';
import {Row, Col, Card, Form, Button, InputGroup} from 'react-bootstrap';
//import stringSimilarity from "string-similarity";
//import ReactDiffViewer from 'react-diff-viewer';

import Aux from "../../../hoc/_Aux";

function CompareDocs(props) {
    const [file1, setFile1] = useState("");
    const [file2, setFile2] = useState("");
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");

    function reload() {
        window.location.reload(false);
    }

    function parseFile1(event){
        if(event){
        
        let file = event.target.files[0]
        
        let reader = new FileReader();

        reader.readAsText(file);

        const result = reader.result

        reader.onload = function() {
            console.log(reader.result);
            
            setFile1(result)
            return result
        };

        reader.onerror = function() {
            console.log(reader.error);
        };
        }else{
        
            return ""
        } 

    }

    function parseFile2(event){
        if(event){
        
        let file = event.target.files[0]
        
        let reader = new FileReader();

        reader.readAsText(file);

        const result = reader.result

        reader.onload = function() {
            console.log(reader.result);
            
            setFile2(result)
            return result
        };

        reader.onerror = function() {
            console.log(reader.error);
        };
        }else{
        
            return ""
        } 
    }
    
    function parseName1(event){
        setName1(event.target.value)
        return event.target.value
    }
    function parseName2(event){
        setName2(event.target.value)
        return event.target.value
    }

    function handleCompare(){
       
       props.noClickMe()
       props.requestScore(file1,file2,name1,name2)
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
                                                <Form.Control type="text" placeholder="Enter name of student" onChange={parseName1} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Select Document</Form.Label>
                                                <InputGroup className="mb-3">
                                                    <input type="file" id="file1" onChange={parseFile1}/><InputGroup.Append />
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
                                                <Form.Control type="text" placeholder="Enter name of student" onChange={parseName2} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Select Document</Form.Label>
                                                <InputGroup className="mb-3">
                                                    <input type="file" id="file2" onChange={parseFile2}/><InputGroup.Append />
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

export default CompareDocs;