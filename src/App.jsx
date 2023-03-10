import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Register from './auth/Register'
import Login from './auth/Login'
import Home from './Home'
import './index.css'
function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
