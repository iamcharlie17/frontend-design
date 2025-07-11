import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Area from './components/Area.jsx';
import CreateAccount from './components/CreateAccount.jsx';
import OtpVerify from './components/OtpVerify.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Area/>,
  },
  {
    path:'/create-account',
    element: <CreateAccount/>
  },
  {
    path: '/verify/:type/:phone/:email/:otp',
    element: <OtpVerify/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
