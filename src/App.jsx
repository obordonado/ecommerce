import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './containers/Home/Home';
import Login from './containers/Login/login';
import Profile from './containers/Profile/Profile';
import Register from './containers/Register/Register';
import Kids from './containers/Kids/Kids';
import Update from './containers/Update/Update';


function App() {

  return (
    <div className="App">

      <BrowserRouter>

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App
