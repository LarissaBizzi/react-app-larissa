import React from 'react';
import Header from '../components/Header'
import AboutElement from '../components/AboutElement'

const About = () => {
  return (
    <div>
      <Header />
      <h1 style={{textAlign: "center", paddingTop: "15%"}}>About</h1>
      <AboutElement />
    </div>
  )
}

export default About