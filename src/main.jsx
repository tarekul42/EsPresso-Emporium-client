import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Components/Layout/MainLayout.jsx';
import AddNewCoffee from './Components/Pages/AddNewCoffee/AddNewCoffee.jsx';
import UpdateExistingCoffee from './Components/Pages/UpdateExistingCoffee/UpdateExistingCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: '/',
        element: <App/>
      },
      {
        path: 'addNewCoffee',
        element: <AddNewCoffee/>
      },
      {
        path: 'updateExistingCoffee',
        element: <UpdateExistingCoffee/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
