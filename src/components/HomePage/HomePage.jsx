import React from 'react';
import './HomePage.css';
import Logo from '../../Logo';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';


function HomePage() {
  return (
    <div>
          <div className="container">
              
        <Header></Header>
        <Section></Section>
        <Footer></Footer>
              
         

        <div className="decorations">
          <div className="decoration-lines decoration-line-1"></div>
          <div className="decoration-lines decoration-line-2"></div>
              </div>
             
  
    
      </div>
    </div>
  );
}

export default HomePage;
