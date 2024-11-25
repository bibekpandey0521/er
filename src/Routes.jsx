import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { ABOUT_ROUTE, CONTACT_ROUTE } from './constants/routes';

const Routes = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route index element={<Home/>}/>
               
                <Route path={ABOUT_ROUTE} element={<About/>}/>
                <Route path={CONTACT_ROUTE} element={<Contact/>}/>
            </Route>
        )
    );
    return <RouterProvider router={router}/>
}

export default Routes;
