import React from 'react';
import {NavLink} from 'react-router-dom';
//import { Formik, Field, Form, ErrorMessage } from 'formik';
//import * as Yup from 'yup';
//import { accountService, alertService } from './../../../_services';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../../store/constant";
import logo from '../../../assets/images/logo.svg';

function SignUp1({ history }) {
 /*const initialValues = {
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: true
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        acceptTerms: Yup.bool()
            .oneOf([true], 'Accept Terms & Conditions is required')
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        accountService.register(fields)
            .then(() => {
                alertService.success('Sign Up successful, please check your email for verification instructions', { keepAfterRouteChange: true });
                history.push('login');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }*/

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
                            <h3 className="mb-4">Sign up</h3>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Username"/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="input-group mb-4">
                                <input type="password" className="form-control" placeholder="password"/>
                            </div>
                            <div className="form-group text-left">
                                <div className="checkbox checkbox-fill d-inline">
                                    <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2"/>
                                        <label htmlFor="checkbox-fill-2" className="cr">Send me the <a href={DEMO.BLANK_LINK}> Newsletter</a> weekly.</label>
                                </div>
                            </div>
                            <button className="btn btn-primary shadow-2 mb-4">Sign up</button>
                            <p className="mb-0 text-muted">Allready have an account? <NavLink to="/auth/signin-1">Login</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>);
}

export default SignUp1