import React from 'react';
import Hero from '../../components/HomeHero.jsx';
import Header from '../../commons/Header.jsx';
import About from '../../components/About.jsx';
import Skills from '../../components/Skills.jsx';
import Portfolio from '../../components/Portfolio.jsx';



import Footer from '../../commons/Footer.jsx';


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