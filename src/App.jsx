
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './Components/Register/Register'
import app from './firebase.config'
import { ToastContainer } from 'react-toastify'
import Login from './Components/Login/Login'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Home'
import PinNote from './Pages/PinNote'
import Trash from './Pages/Trash'


function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login />} />
        {/* ========= Layout one ===== */}
        <Route path ='/' element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path='/pinnote' element={<PinNote />} />
        <Route path='/trash' element={<Trash />} />
        </Route>
      </Route>
    )
  )
  

  return (
    <>
      <RouterProvider router={myRoute} />
      <ToastContainer />
    </>
  )
}

export default App
