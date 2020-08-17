import React, { useState } from 'react';
import {NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../../../context/auth";
//import config from "../../../config";

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import logo from '../../../assets/images/logo.svg';
import {Alert} from 'react-bootstrap'
//import { Formik, Field, Form, ErrorMessage } from 'formik';
//import * as Yup from 'yup';


function Signin1(props) {
        const [isLoggedIn, setLoggedIn] = useState(false);
        const [isError, setIsError] = useState(false);
        const [userName, setUserName] = useState("");
        const [password, setPassword] = useState("");
        const { setAuthTokens } = useAuth();
        let referer = ""
        if(props.location.state){ referer = props.location.state.referer || '/dashboard/default'}else{referer = "auth/signin"}

        function postLogin() {
        axios.post("https://243f611b-2817-48a5-886b-e4822a76ad68.mock.pstmn.io/users/login", {
            userName,
            password
        }).then(result => {
            if (result.status === 200) {
            setAuthTokens(result.data);
            setLoggedIn(true);
            console.log(result)
            } else {
            setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
        }
    
        if (isLoggedIn) {
            return <Redirect to={referer} />;
        }
        
        return(
            <Aux>
            <Breadcrumb/>
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r"/>
                        <span className="r s"/>
                        <span className="r s"/>
                        <span className="r"/>
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-4">
                            <img className="" style={{width: '50%'}} src={logo} alt="activity-user"/>
                            </div>
                            { isError &&<Alert variant="danger" dismissible>The username or password provided were incorrect!</Alert> }
                            <h3 className="mb-4">Login</h3>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control"
                                value={userName}
                                onChange={e => {
                                  setUserName(e.target.value);
                                }}
                                placeholder="Email"/>
                            </div>
                            <div className="input-group mb-4">
                                <input type="password" className="form-control" 
                                 value={password}
                                 onChange={e => {
                                   setPassword(e.target.value);
                                 }}
                                placeholder="password"/>
                            </div>
                            <div className="form-group text-left">
                                <div className="checkbox checkbox-fill d-inline">
                                    <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                        <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                </div>
                            </div>
                            <button className="btn btn-primary shadow-2 mb-4" onClick={postLogin}>Login</button>
                            <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
            );
}

export default Signin1