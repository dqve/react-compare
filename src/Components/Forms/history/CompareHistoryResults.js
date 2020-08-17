import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import CountUp from 'react-countup';
import ReactDiffViewer from 'react-diff-viewer';

import Aux from "../../../hoc/_Aux";

function CompareResults(props) {
        function handleClick(){
            props.onCompareClick()
        }
            const oldCode = `${props.file1 || "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer eu lacus accumsan arcu fermentum euismod. Donec pulvinar porttitor tellus. Aliquam venenatis. Donec facilisis pharetra tortor.  In nec mauris eget magna consequat convallis. The world flat  The world flat The world flat The world flat The world flat. Nam sed sem vitae odio pellentesque interdum. Sed consequat viverra nisl. Suspendisse arcu metus, blandit quis, rhoncus ac, pharetra eget, velit. Mauris urna. Morbi nonummy molestie orci. Praesent nisi elit, fringilla ac, suscipit non, tristique vel, mauris. Curabitur vel lorem id nisl porta adipiscing. Suspendisse eu lectus. In nunc. Duis vulputate tristique enim. Donec quis lectus a justo imperdiet tempus. The world flat The world flat The world flat The world flat The world flat The world flat"}`;
            const newCode = `${props.file2  || "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer eu lacus accumsan arcu fermentum euismod. Donec pulvinar porttitor tellus. Ut pharetra sit amet aliquam id diam maecenas ultricies. Vel eros donec ac odio tempor. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Odio aenean sed adipiscing diam. Justo donec enim diam vulputate ut pharetra sit amet aliquam. The world flat The world flat The world flat The world flat The world flat The world flat Praesent nisi elit, fringilla ac, suscipit non, tristique vel, mauris. Curabitur vel lorem id nisl porta adipiscing. Suspendisse eu lectus. In nunc. Duis vulputate tristique enim. Donec quis lectus a justo imperdiet tempus. The world flat The world flat The world flat The world flat The world flat The world flat"}`;
            console.log(props.file2)
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
                                                <h3>This is the percentage similarity between the two documents {(props.name1 && props.name1) ? "from "+props.name1+" and "+props.name2 : ""}</h3>
                                            </div>
                                            <ReactDiffViewer oldValue={oldCode} newValue={newCode} splitView={true} /> <br/>
                                            <Button  onClick={handleClick}>Compare</Button>
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

export default CompareResults;