import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import OrderHistory from './components/OrderHistory';
import Dasboard from './components/Dasboard';

function App() {

  const router= createBrowserRouter([
    {
      path:'/',
      element: <Dasboard/> 
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
      path:'/Dasboard',
      element: <Dasboard/> 
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
