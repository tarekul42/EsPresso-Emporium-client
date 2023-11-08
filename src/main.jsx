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
import ViewCoffeeDetails from './Components/Pages/ViewCoffeeDetails/ViewCoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: '/',
        element: <App/>,
        loader: () => fetch('http://localhost:5000/coffees')
      },
      {
        path: 'addNewCoffee',
        element: <AddNewCoffee/>
      },
      {
        path: 'viewCoffeeDetails/:id',
        element: <ViewCoffeeDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
      },
      {
        path: 'updateExistingCoffee',
        element: <UpdateExistingCoffee/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
