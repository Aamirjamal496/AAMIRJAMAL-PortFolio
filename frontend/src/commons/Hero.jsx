import React from 'react'
import Header from './Header';
import '../App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { FaCode, FaLaptopCode, FaLaravel, FaReact } from "react-icons/fa";

const Hero = ({preHeading,heading, text}) => {
  return (
    <>
      <section className="about-hero ">
        <Header/>
      <div className='d-flex mt-3'>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 about-text">
            <h5>{preHeading}</h5>
            <h1>{heading}</h1>
            <p>{text}</p>
          </div>

          {/* Right Section - Floating Icons */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="floating-icons">
              <i><FaLaravel /></i>
              <i><FaLaptopCode /></i>
              <i><FaReact /></i>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Hero