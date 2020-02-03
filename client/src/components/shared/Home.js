import React from 'react';
import Logo from './media/images/Logo2020.png';

const Home = () => (

  <div align='center' style={{height: '100vh'}}>
    <img src={Logo} style={{opacity: .7}} width='73%' alt='CEO Janitorial Logo'></img>
    <p style={{paddingBottom: 30, opacity: .8, paddingTop: 50}} align='center'>
      © 2020 Website Created by Mason D Eyre
      <br/>
      <a href='mailto:mason.deyre@gmail.com' target='_blank' rel='noopener noreferrer'>
        mason.deyre@gmail.com
      </a>
      <br/>
      <a href='http://www.masoneyre.com' target='_blank' rel='noopener noreferrer'>
        www.masoneyre.com
      </a>
    </p>
  </div>
)

export default Home;
