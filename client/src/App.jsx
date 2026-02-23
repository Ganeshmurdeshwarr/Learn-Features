import { Route, Routes } from 'react-router-dom'
import UserLayout from './Layouts/UserLayout'
import Home from './pages/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import Setting from './components/Setting'
import Note from './components/navSections/Note'
import Trash from './components/navSections/Trash'
import CreateNote from './components/navSections/CreateNote'
import Search from './components/navSections/Search'

function App() {

  return (
    <div className="">

  {/* User Routes */}

  <Routes>
      <Route path='/' element={<UserLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/setting' element={<Setting/>}/>
      <Route path='/note/:id' element={<Note/>}/>
      <Route path='/create-note' element={<CreateNote/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/trash' element={<Trash/>}/>
      </Route>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
 </Routes>
    </div>
  )
}

export default App
