import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main/Main';
import Blog from '../../pages/Blog/Blog';
import Courses from '../../pages/Courses/Courses';
import FAQ from '../../pages/FAQ/FAQ';
import Home from '../../pages/Home/Home';
import Error from '../../pages/Others/Error/Error';
import Login from '../../pages/SignUpAndLogin/Login/Login';
import SignUp from '../../pages/SignUpAndLogin/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
]);