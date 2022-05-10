import React from 'react';

const Banner = () => {
    return (
        <div className="px-5">
            <div className="hero min-h-screen bg-[url('https://i.ibb.co/ckyW7FT/bg.png')] bg-no-repeat bg-cover	 bg-center	" >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={`https://i.ibb.co/StRFvLy/chair.png`} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6 px-6">WE HAVE SOLVED THE MOST CHALLENGING MODERN HEALTHCARE PROBLEM; ACCESSIBILITY AND AFFORDABILITY
</p>
      <button className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary ">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;