import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Contact from "./routes/Contact.jsx";
import About from "./routes/About.jsx";

const router = createBrowserRouter(
{
        path: '/',
        element: <App/>,
    },
{
        path: '/contact',
        element: Contact,
    },
    {
        path: '/about',
        element: About,
    },
    {
        path: '/deck/',
        element: <h1>Deck</h1>,
    }
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
