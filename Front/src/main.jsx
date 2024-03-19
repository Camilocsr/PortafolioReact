import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css"
import "./css/flexbox.css"
import "./css/estilo.css"
import 'animate.css/animate.css';


const router = createBrowserRouter([
  {
    path: "/PortafolioReact",
    element: <App/>
    // errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
