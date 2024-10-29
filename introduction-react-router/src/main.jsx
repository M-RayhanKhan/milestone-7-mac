import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componets/Home/Home';
import About from './componets/About/About';
import Contact from './componets/Contact/Contact';
import Users from './componets/Users/Users';
import UserDetails from './componets/UserDetails/UserDetails';
import Posts from './componets/Posts/Posts';
import PostDetails from './componets/PostDetails/PostDetails';
import ErrorPages from './componets/ErrorPages/ErrorPages';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPages></ErrorPages>,
    children:[
     { 
      path: '/about',
      element: <About></About>
     },
     {
      path: '/contact',
      element: <Contact></Contact>
     },
     {
      path: '/users',
      loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
      element: <Users></Users>
     },
     {
      path: '/user/:userId',
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element: <UserDetails></UserDetails>
     }, 
     {
      path: 'posts',
      loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <Posts></Posts>
     },
     {
      path: '/post/:postId',
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element: <PostDetails></PostDetails>
     }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
