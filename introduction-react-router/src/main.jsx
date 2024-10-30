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
import Meals from './componets/Meals/Meals';
import MealDetails from './componets/MealDetails/MealDetails';



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
      path: '/meals',
      loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`),
      element: <Meals></Meals>
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
     },
     {
      path: '/mealDetails/:mealDetails',
      loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealDetails}`),
      element: <MealDetails></MealDetails>
     }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
