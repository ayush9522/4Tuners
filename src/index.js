import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/Aboutcomponents/About';
import Services from './components/Servicescomponent/Services';
import Contact from './components/Contactcomponent/Contact';
import Ourteam from './components/Ourteamcomponent/Ourteam';
import Whychooseus from './components/Whychooseuscomponent/Whychooseus'
import Register from './components/Registercomponent/Register';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Aboutus",
    element: <About/>,
  },
  {
    path: "Services",
    element: <Services/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
  {
    path: "Ourteam",
    element: <Ourteam/>,
  },
  {
    path: "Whychooseus",
    element: <Whychooseus/>,
  },
  {
    path: "Register",
    element: <Register/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router}/>
    
 
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
