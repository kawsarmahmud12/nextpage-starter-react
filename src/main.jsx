import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Books from './components/Books.jsx';
import BookDetails from './components/BookDetails.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/books',
        element: <Books/>,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/loader',
        element: <LoadingSpinner/>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
