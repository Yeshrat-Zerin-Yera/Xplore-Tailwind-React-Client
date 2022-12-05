import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main/Main';
import AllCourses from '../../pages/AllCourses/AllCourses';
import Blog from '../../pages/Blog/Blog';
import BlogDetails from '../../pages/BlogDetails/BlogDetails';
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
                loader: () => fetch('https://xplore-tailwind-react-server.vercel.app/courses')
            },
            {
                path: '/categories/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`https://xplore-tailwind-react-server.vercel.app/categories/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://xplore-tailwind-react-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://xplore-tailwind-react-server.vercel.app/checkout/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>,
                loader: () => fetch('https://xplore-tailwind-react-server.vercel.app/blogs')
            },
            {
                path: '/blogs/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`https://xplore-tailwind-react-server.vercel.app/blogs/${params.id}`)
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