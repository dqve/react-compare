import React, { useState }  from 'react';
import {Row, Col, Card, Form, Button, Collapse, Table} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";

function CompareDocs({name1, text1, hist, requestScore, ...props}){

        const [file2, setFile2] = useState("");
        const [name2, setName2] = useState("");
        const [isBasic, setBasic] = useState(false);
        
        function reload() {
            window.location.reload(false);
        }

        function parseName(event){
            if(event){ 
                setName2(event.target.value); 
                return event.target.value
            } else{ 
                setName2(" ")
                return " "            
            }
            
        }

        function parseFile(){
            let name = parseName()

            setFile2(hist.name)
            return name
        }

        function handleCompare(){
          parseFile()
          props.onCompareClick()
          props.requestHistScore(file2,name2)
        }

        return (
            <Aux>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">{name1}'s History</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                        <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Name</Form.Label>
                                                <h2>{name1}</h2>
                                                <Form.Control type="text" placeholder="Enter name of student to compare with" onChange={parseName}/>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                    <Button onClick={() => setBasic(!isBasic)}>Click to reveal {name1}'s document</Button>
                                                    <Collapse in={isBasic}>
                                                        <div id="basic-collapse">
                                                                <Card.Text>
                                                                    {text1 || "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer eu lacus accumsan arcu fermentum euismod. Donec pulvinar porttitor tellus. Aliquam venenatis. Donec facilisis pharetra tortor.  In nec mauris eget magna consequat convallis.  The world flat The world flat The world flat The world flat  The world flat The world flat The world flat The world flat. Nam sed sem vitae odio pellentesque interdum. Sed consequat viverra nisl. Suspendisse arcu metus, blandit quis, rhoncus ac, pharetra eget, velit. Mauris urna. Morbi nonummy molestie orci. Praesent nisi elit, fringilla ac, suscipit non, tristique vel, mauris. Curabitur vel lorem id nisl porta adipiscing. Suspendisse eu lectus. In nunc. Duis vulputate tristique enim. Donec quis lectus a justo imperdiet tempus. The world flat The world flat The world flat The world flat The world flat The world flat"}
                                                                </Card.Text>
                                                        </div>
                                                    </Collapse>
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
                                <Card.Title as="h5">History</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Score</th>
                                        <th>Text</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {Object.keys(hist).map((each, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                            <tr>{each}</tr>
                                            <td>{hist[each][1]}</td>
                                            <td>{hist[each][0]}</td>

                                        </tr>
                                    ))}

                                    </tbody>
                                </Table>
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

export default CompareDocs