import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Contact from "./routes/Contact.jsx";
import About from "./routes/About.jsx";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

const router = createBrowserRouter(
    [
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
    ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <RouterProvider router={router}/>
        </DevSupport>
    </React.StrictMode>,
)
