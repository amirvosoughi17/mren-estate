import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
         <Route  path='/' element={<Home />}/>
         <Route  path='/signin' element={<Signin />}/>
         <Route  path='/signup' element={<SignUp />}/>
         <Route  path='/about' element={<About />}/>
         <Route element={<PrivateRoute />}>
           <Route  path='/profile' element={<Profile />}/>
         </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
