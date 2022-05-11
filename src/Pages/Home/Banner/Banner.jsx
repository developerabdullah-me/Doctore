import React from "react";
import PrimaryButton from "../../Sheare/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="px-5">
      <div className="hero min-h-fit bg-[url('https://i.ibb.co/ckyW7FT/bg.png')] bg-no-repeat bg-cover	 bg-center	">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={`https://i.ibb.co/StRFvLy/chair.png`}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className='text-left'> 
            <h1 className="text-5xl font-bold text-left">Your New Smile Starts Here</h1>
            <p className="py-6 px-6 text-left">
              WE HAVE SOLVED THE MOST CHALLENGING MODERN HEALTHCARE PROBLEM;
              ACCESSIBILITY AND AFFORDABILITY
            </p>
           <PrimaryButton>Get Start</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
