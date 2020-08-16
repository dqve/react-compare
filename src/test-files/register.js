import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
 
export default class Register extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            name: '',
            userName: '',
            password: '',
            tokens:''
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
   localStorage.setItem('tokens',JSON.stringify(this.state));
}
 
// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('tokens'));
 
    if (localStorage.getItem('tokens')) {
        this.setState({
            name: this.documentData.name,
           userName: this.documentData.userName,
           password: this.documentData.password,
           tokens: this.documentData.tokens
    })
} else {
    this.setState({
        name: '',
        userName: '',
        password: '',
        tokens:''
    })
}
}
 
render() {
    return (
        <div className="container">
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="title" className="form-control" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>username</label>
                    <input type="text" name="userName" className="form-control" value={this.state.userName} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Pw</label>
                    <input type="text" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Token</label>
                    <input type="text" name="tokens" className="form-control" value={this.state.tokens} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    )
}
}