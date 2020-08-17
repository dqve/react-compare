import React from 'react';
//import {Row, Col, Card, Form, Button, InputGroup, FormControl} from 'react-bootstrap';
import CompareDocs from "./Compare"
import CheckHistory from "./History"
import CompareResults from "./CompareHistoryResults";
import axios from 'axios';
//import Aux from "../../hoc/_Aux";
//import Loader from "../../App/layout/Loader";

class History extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.requestHistory = this.requestHistory.bind(this);
        this.requestHistScore = this.requestHistScore.bind(this);
        this.onCompareClick = this.onCompareClick.bind(this);
        this.state = {
        isClicked: false,
        hist: "",
        name1: "",
        name2: "",
        text1: "",
        text2: "",
        similarity: ""
        }
        console.log(this.state)
    }

    handleClick = (click = true, 
        hist= "",
        n1 = this.state.name1, 
        n2 = this.state.name2, 
        t1 = this.state.text1, 
        t2 = this.state.text2, 
        sim = this.state.similarity) => {

        this.setState({
        isClicked: click,
        hist: hist,
        name1: n1,
        name2: n2,
        text1: t1,
        text2: t2,
        similarity: sim

        }, () => console.log(this.state))
    }

    onCompareClick = () => {
        this.setState({
        isClicked: false
        }, () => console.log(this.state.isClicked))
    }

    requestHistory = (text1, name1) => {
        axios.get("https://243f611b-2817-48a5-886b-e4822a76ad68.mock.pstmn.io/history", {
            name1,
            text1
        }).then(result => {
            if (result.status === 200) {
                this.handleClick(true, result.data, name1, text1, "")
                console.log(this.state.hist)
            }
        })
    }

     requestHistScore = (text2, name2, text1=this.state.text1) => {
        axios.get("https://243f611b-2817-48a5-886b-e4822a76ad68.mock.pstmn.io/similarity/check", {
            text1,
            text2
        }).then(result => {
            if (result.status === 200) {
                this.handleClick("final","",this.state.name1,name2,this.state.text1,text2,result.data.similarity)
                console.log(this.state.similarity, result)
            }
        })
    }    

    render() {
        const isClicked = this.state.isClicked

        if(isClicked === false){
        return < CheckHistory noClickMe={this.handleClick} requestHistory={this.requestHistory} /> 
        }
        else if (isClicked === true){
        return < CompareDocs
            hist={this.state.hist} 
            onCompareClick={this.onCompareClick} 
            name1={this.state.name1} 
            text1={this.state.text1}
            requestHistScore={this.requestHistScore}
            />
        }
        else if (isClicked === "final"){
           return < CompareResults 
                similarity={this.state.similarity} 
                onCompareClick={this.onCompareClick} 
                name1={this.state.name1} 
                name2={this.state.name2}
            />
        }
    }
}

export default History ;