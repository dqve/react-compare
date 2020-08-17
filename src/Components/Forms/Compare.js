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
        similarity: ""
        }
        console.log(this.state)
    }

    handleClick = (click = true, similarity= "") => {
        this.setState({
        isClicked: click,
        similarity: similarity
        }, () => console.log(this.state.isClicked))

    }

    onCompareClick = () => {
        this.setState({
        isClicked: false
        }, () => console.log(this.state.isClicked))
    }

    requestScore = (text1, text2) => {
        axios.get("https://243f611b-2817-48a5-886b-e4822a76ad68.mock.pstmn.io/check/similarity", {
            text1,
            text2
        }).then(result => {
            if (result.status === 200) {
                this.handleClick(true, result.data.similarity)
                console.log(this.state.similarity)
            }
        })
        }

    render() {
        const isClicked = this.state
        if(isClicked === false){
           return < CompareDocs noClickMe={this.handleClick} requestScore={this.requestScore} />
            //console.log("false!")
        }
        else{
           // return < CompareResults similarity={this.state.similarity} onCompareClick={this.onCompareClick}/>
           console.log("true!")
        }
        return < CompareResults similarity={this.state.similarity} onCompareClick={this.onCompareClick}/>
    }
}

export default compare;