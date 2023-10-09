import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import About from './pages/About'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route  path='/' element={<Home />}/>
         <Route  path='/profile' element={<Profile />}/>
         <Route  path='/signin' element={<Signin />}/>
         <Route  path='/signup' element={<SignUp />}/>
         <Route  path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
