import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('../Demo/Dashboard/Default'));


const FormsElements = React.lazy(() => import('../Demo/Forms/FormsElements'));

const compareDocs = React.lazy(() => import('../Demo/Forms/Compare'));

const users = React.lazy(() => import('../Demo/Forms/Users'));

const history = React.lazy(() => import('../Demo/Forms/History'));

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/forms/compare-docs', exact: true, name: 'Compare Documents', component: compareDocs },
    { path: '/forms/users', exact: true, name: 'Users', component: users },
    { path: '/forms/history', exact: true, name: 'Users', component: history },
];

export default routes;