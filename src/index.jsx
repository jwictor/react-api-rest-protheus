import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ErrorPage from './Pages/ErrorPage';
import Users from './Pages/Users';
import Logout from './Pages/Logout';
import UserDetails from './Pages/UserDetails';
import NewUser  from './Pages/NewUser';

const publicRoute = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {path: '/', element: <Home />},
    {path: '/home', element: <Home />},
    {path: '/login', element: <Login />},
    {path: '/*', element: <ErrorPage />}
  ]
}])

const protectedRoute = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {path: '/', element: <Users />},
    {path: '/users', element: <Users />},
    {path: '/users/:id', element: <UserDetails />},
    {path: '/newuser', element: <NewUser />},
    {path: '/logout', element: <Logout />},
    {path: '/*', element: <ErrorPage />}
  ]
}])

const route = localStorage.getItem("@1app/displayname") === null ? publicRoute : protectedRoute;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {route} />
  </React.StrictMode>
);
