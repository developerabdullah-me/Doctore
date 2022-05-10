import React from 'react';
import clock from '../../../icons/clock.svg'
import phone from '../../../icons/phone.svg'
import marker from '../../../icons/marker.svg'
const Info = () => {
    return (
        <div className='grid md:grid-cols-3 gap-6 px-11 sm:grid-cols-1 '>
            <div className=" bg-primary px-5 rounded-md">
              <div  className=" flex items-center gap-16 py-7">
              <img src={clock} alt="" />
              <div className="">
                  <h1  className="pb-5 text-white font-bold">Opening Hours</h1>
                  <p className="text-white">5:00 AM to 7:00 PM</p>
              </div>
              </div>
            </div>
            <div className="bg-gray-900 px-5 rounded-md">
            <div  className=" flex items-center gap-16 py-7">
            <img src={marker} alt="" />
            <div>
                <h1  className="pb-5 ">Visit our location</h1>
                <p>Brooklyn, NY 10036, United States</p>
            </div>
            </div>
            </div>
            <div className="text-white bg-gradient-to-r from-secondary to-primary px-5 rounded-md">
              <div className=" flex items-center gap-16 py-7">
              <img src={phone} alt="" />
              <div className="">
                  <h1 className="pb-5">Contact us now</h1>
                  <span className="d-block text-blue-700"><a href="tel:+88 01779-358821">+88 01779-358821</a></span>
              </div>
              </div>
            </div>
            
        </div>
    );
};

export default Info;