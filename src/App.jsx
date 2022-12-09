import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './containers/Home/Home';
import Login from './containers/Login/login';
import Profile from './containers/Profile/Profile';
import Register from './containers/Register/Register';
<<<<<<< HEAD
=======
import Kids from './containers/Kids/Kids';
import Update from './containers/Update/Update';

>>>>>>> master

function App() {

  return (
    <div className="App">

      <BrowserRouter>

      <Header/>
<<<<<<< HEAD

=======
>>>>>>> master
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
<<<<<<< HEAD
=======
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/update' element={<Update/>}/>
>>>>>>> master
      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App
