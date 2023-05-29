import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home'
import About from './pages/about'
import contact from './pages/contact';
import './pages/index.css'
import { BrowserRouter, Routes, Route,Link} from "react-router-dom"
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
    <header className='header' >
      <Link to='/'>Home</Link>
      <nav className='navbar'>
        <Link to='/contact'>Contact</Link>
        <Link to='/about' >About</Link>
      </nav>
    </header>
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
  </BrowserRouter>
   
  )
}
ReactDOM.createRoot(document.getElementById('root')).
render( < App/>);