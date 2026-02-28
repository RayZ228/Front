import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React from 'react;
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import Courses from "./pages/Courses.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'courses', element: <Courses /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
