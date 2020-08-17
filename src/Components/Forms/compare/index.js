import React from 'react';
//import {Row, Col, Card, Form, Button, InputGroup, FormControl} from 'react-bootstrap';
import CompareDocs from "./CompareDocs"
import CompareResults from "./CompareResults"
import axios from 'axios';
//import Aux from "../../hoc/_Aux";
//import Loader from "../../App/layout/Loader";

class compare extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.requestScore = this.requestScore.bind(this);
        this.onCompareClick = this.onCompareClick.bind(this);
        this.state = {
        isClicked: false,
        similarity: "",
        name1: "",
        name2: ""
        }
        console.log(this.state)
    }

    handleClick = (click = true, similarity= "", n1, n2) => {
        this.setState({
        isClicked: click,
        similarity: similarity,
        name1: n1,
        name2: n2
        }, () => console.log(this.state))

    }

    onCompareClick = () => {
        this.setState({
        isClicked: false
        }, () => console.log(this.state.isClicked))
    }

    requestScore = (text1, text2, name1, name2) => {
        axios.get("https://243f611b-2817-48a5-886b-e4822a76ad68.mock.pstmn.io/check/similarity", {
            text1,
            text2
        }).then(result => {
            if (result.status === 200) {
                this.handleClick(true, result.data.similarity, name1, name2)
                console.log(this.state.similarity)
            }
        })
        }

    render() {
        const isClicked = this.state.isClicked
        return ((isClicked === false) ? 
        < CompareDocs noClickMe={this.handleClick} requestScore={this.requestScore} /> 
        : < CompareResults 
            similarity={this.state.similarity} 
            onCompareClick={this.onCompareClick} 
            name1={this.state.name1} 
            name2={this.state.name2}/>
        )
    }
}

export default compare;