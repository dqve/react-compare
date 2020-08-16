import React from 'react';

const SignUp1 = React.lazy(() => import('../Demo/Authentication/SignUp/SignUp1'));
const Signin1 = React.lazy(() => import('../Demo/Authentication/SignIn/SignIn1'));
const Register = React.lazy(() => import('../test-files/register'));

const route = [
    { path: '/auth/signup', exact: true, name: 'Signup', component: SignUp1 },
    { path: '/auth/signin', exact: true, name: 'Signin', component: Signin1 },
    { path: '/register', exact: true, name: 'Register', component: Register },
];

export default route;