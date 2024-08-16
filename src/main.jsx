import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { UserList } from './pages/UserList/UserList.jsx'
import { UserCreate } from './pages/UserCreate/UserCreate.jsx'
import App from './App.jsx'
import './index.css'
import { Login } from './pages/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "/users/new",
    element: <UserCreate />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
