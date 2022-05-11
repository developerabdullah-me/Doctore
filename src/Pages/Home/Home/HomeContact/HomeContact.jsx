import React from 'react';
import PrimaryButton from '../../../Sheare/PrimaryButton/PrimaryButton';


const HomeContact = () => {
    return (
        <div className="">
            <div className="bg-no-repeat bg-cover pb-10 pt-10	min-h-full bg-center  bg-[url('https://i.ibb.co/64SHrxW/appointment.png')]" >
                <h1 className="text-center text-primary text-xl">Contact Us</h1>
                <h1 className="text-center text-white text-5xl">Stay connected with us</h1>
                <from>
                    <input className="block mt-4 py-4 w-72 mx-auto px-3 " type="email" placeholder='Email Address'/>
                    <input className="block mt-4 py-4 w-72 mx-auto px-3 " type="text" placeholder='Subject'/>
                    <textarea className="block mt-4 py-4 w-72 mx-auto px-3 mb-8" placeholder='Your message'></textarea>
                   <div  className="mx-auto block">
                   <button className="btn btn-primary uppercase font-bold block mx-auto text-white bg-gradient-to-r from-secondary to-primary ">
             Get Started
            </button>
                   </div>
                </from>
            </div>
        </div>
    );
};

export default HomeContact;