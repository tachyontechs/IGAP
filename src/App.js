import {

  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Header from './components/Header'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'

import ProtectedRoute from './routing/ProtectedRoute'
import './App.css'
import Home from './components/Home/Home'
import Create from './components/Create/Create'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer'
import Getjob from './components/Getjob/Getjob'

function App() {
  return (

    <div>
      <Header />
      <main className='container content'>
        <Routes>
          <Route path='/' element={<Getjob />} />
          <Route path='/jobdetail/:id' element={<Home/>}/>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/user-profile' element={<ProfileScreen />} />
            <Route path='/create' element={<Create />} />
          </Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        <ToastContainer />
      </main>
      <Footer/>
    </div>

  )
}

export default App
