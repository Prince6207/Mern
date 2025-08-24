import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Productlist from './productlist';
import Addproduct from './addproduct';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Productlist></Productlist>
  },{
    path:'/add',
    element:<Addproduct></Addproduct>
  }
])
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
