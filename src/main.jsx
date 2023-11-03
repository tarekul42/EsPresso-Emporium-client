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
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
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
      },
      {
        path: 'errorPage',
        element: <ErrorPage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
