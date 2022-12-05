import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main/Main';
import AllCourses from '../../pages/AllCourses/AllCourses';
import Blog from '../../pages/Blog/Blog';
import Checkout from '../../pages/Checkout/Checkout';
import CourseDetails from '../../pages/CourseDetails/CourseDetails';
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
                element: <AllCourses></AllCourses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/categories/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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