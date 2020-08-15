import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

class Users extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='No content' isOption>
                            <p>
                                Hello there, unfortunately this page is still under construction and there is no content on it yet, kindly check back later.
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Users;