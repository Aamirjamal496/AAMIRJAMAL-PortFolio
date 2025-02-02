import { useState } from 'react';
import './App.css';
import './assets/CSS/Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './assets/pages/Home.jsx';
import About from './assets/pages/About.jsx';
import ContactUs from './assets/pages/ContactUs.jsx';
import Dashboard from './admin/Dashboard.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<ContactUs/>} />
      {/* Admin Dashboard */}
      <Route path="/admin" element={<Dashboard />}>
          <Route index element={<h2>Welcome, Admin!</h2>} />
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
