import React, { useState } from 'react';
import './Home.css';
import Roadmap from './components/Roadmap';
import Staff from './components/Staff';
import Technology from './components/Technology/Technology';
import Mission from './components/Mission';
import Contact from './components/Contact';
import History from './components/History';
import Product from './components/Product/Product';
import Business from './components/Business/Business';
import Partners from './components/Partners/Partners';

const Home = () => {

  return (
    <div className="home">
      <Mission/>
      <Staff/>
      <Product/>
      <Technology/>
      <History/>
      <Partners/>
      <Contact/>
    </div>
  );
}

export default Home;