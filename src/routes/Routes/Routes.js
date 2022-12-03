import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main/Main';
import Courses from '../../pages/Courses/Courses';
import FAQ from '../../pages/FAQ/FAQ';
import Home from '../../pages/Home/Home';
import Login from '../../pages/SignUpAndLogin/Login/Login';
import SignUp from '../../pages/SignUpAndLogin/SignUp/SignUp';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
]);