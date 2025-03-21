import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ToastContainer, toast } from "react-toastify";
import './css/Login.css';  // We'll add some custom CSS for animations
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Msg, setMsg] = useState("");
  const Navigate= useNavigate();
  const formRef = useRef(null);  // Create a ref for the form container

  const login=async(event)=>{
    event.preventDefault();
    try{
      const response = await axios.post('http://localhost:8000/api/login/',{
        email,password,
      });
      const token = response.data.token;
      localStorage.setItem('auth_token', token);
      // localStorage.setItem('auth_token',token);
      Navigate('/dashboard');
        if (token) {
  console.log("Token stored in localStorage:", localStorage.getItem('auth_token'));
          // console.log(localStorage.getItem('auth_token',token));
        }
      // return token;
    }catch(error){
      if(error.response && error.response.data){
        setMsg(error.response.data.message || 'Invalid credentials');
      }else{
        setMsg('An error occurred. Please try again later.');
      }
    }
  }


  // Handle form visibility
  React.useEffect(() => {
    setShowForm(true); // Trigger the animation when the component mounts
  }, []);
  // const [user, setuser] = useState({email:"",password:""});

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <CSSTransition
        in={showForm}
        timeout={500}
        classNames="fade"
        unmountOnExit
        nodeRef={formRef}
      >
        <div className="card p-4 shadow-lg border-0" style={{ maxWidth: '400px', width: '100%' }}>
          <h3 className="text-center mb-4">Admin Login</h3>
          <p style={{color:"green"}}>{Msg}</p>
          <form onSubmit={login}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>{
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>{
                  setpassword(e.target.value);
                }}
              />
            </div>
            <input type="submit" className="btn btn-primary w-100" />
          </form>
        </div>
      </CSSTransition>
      <ToastContainer/>
    </div>
  );
};

export default Login;
