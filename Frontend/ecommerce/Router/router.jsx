import React from 'react'
import { createRoot } from "react-dom/client";
import Login from '../src/Pages/Login'
import ForgetPassword from '../src/Pages/ForgetPassword'
import Productdetails from '../src/Components/Productdetails';
import Cart from '../src/Components/cart';
import Filtering from '../src/Components/filtering';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from '../src/App'
import Home from '../src/Pages/Home'
import Signup from '../src/Pages/Signup'
import AdminPanel from '../src/Pages/AdminPanel';
import Allusers from '../src/Components/Allusers';
import Allproducts from '../src/Components/allproducts';
import Categorydetails from '../src/Components/Categorydetails';
import Searchproduct from '../src/Components/Searchproduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "forgot-password",
        element: <ForgetPassword />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
      children:[
        {
          path: "allusers",
          element: <Allusers />
        },
        {
          path: "allproducts",
          element: <Allproducts />
        },
      ]},
      {
        path: "categoryproduct/:category",
        element: <Categorydetails />
      },
      {
        path: "product/:productId",
      element:<Productdetails />
      },
      {
        path: "cart",
        element: <Cart />
      },{
        path: "searchproduct/",
        element: <Searchproduct />
      },{
        path: "searchproduct/:query",
        element: <filtering />
      },{
        path: "filtering",
        element: <Filtering />
      }
      
      
    ]
  }
])



export default router


    
  



