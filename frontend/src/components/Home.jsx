import React from 'react';
import Hero from '../commons/HomeHero.jsx';
import Header from '../commons/Header.jsx';
import About from '../commons/About.jsx';
import Skills from '../commons/Skills.jsx';
import Portfolio from './Portfolio.jsx';



import Footer from './Footer.jsx';


const Home = () => {
  
  return (<>
  <div className='bg-hero'>
  <Header/>
  <Hero/>
</div>
<About/>
<Skills/>
<Portfolio/>
<Footer/>
</>
  );
}


export default Home