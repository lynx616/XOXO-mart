import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import OrderHistory from './components/OrderHistory';

function App() {

  const router= createBrowserRouter([
    {
      path:'/',
      element: <Login/> 
    },
    {
      path:'/login',
      element: <Login/> 
    },
    {
      path:'/signup',
      element: <Signup/> 
    },
    {
      path:'/profile',
      element: <Profile/> 
    },
    {
      path:'/orderHistory',
      element: <OrderHistory/> 
    },

  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
