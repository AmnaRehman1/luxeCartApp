import React from 'react';
import img1 from '../Assets/img/img1.jpg';


function HeroSection() {
  return (
    <div className='hero'>
      {/* introduction */}

      <div class='text'>
        {/* <div className='hello'>Hello,</div> */}
        <h1 class='title'>
           <span className='nom'>Welcome to</span>
        </h1>
        <h1> LuxeCart Haven</h1>
        <p class='description'>
        We've got great stuff at great prices. Find what you love, and enjoy shopping with us. Quality meets affordability here. Start exploring and make your shopping awesome!"
        </p>
      </div>

      {/* image  */}
      <img src={img1}  alt=' Hello' class='image'></img>
    </div>
  );
};

export default HeroSection;
