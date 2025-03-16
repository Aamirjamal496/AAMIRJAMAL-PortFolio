import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home.jsx';
import About from './assets/pages/About.jsx';
import ContactUs from './assets/pages/ContactUs.jsx';
import Dashboard from './admin/Dashboard.jsx';
import Login from './admin/Login.jsx';
import ProtectedRoute from './admin/components/ProtectedRoute.jsx';

function App() {
  const token = localStorage.getItem('auth_token');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          {/* Admin Dashboard */}
          <Route path='/admin' element={<Login />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
