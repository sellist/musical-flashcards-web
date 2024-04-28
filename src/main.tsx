import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './variables.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews} from "./dev";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/about/About.tsx";
import CreateDeck from "./pages/createDeck/CreateDeck.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Home from "./pages/Home/Home.tsx";

export const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create" element={<CreateDeck />} />
        </Routes>
    </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}>
            <App/>
        </DevSupport>
    </React.StrictMode>,
)
