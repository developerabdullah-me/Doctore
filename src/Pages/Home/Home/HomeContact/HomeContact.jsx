import React from 'react';
import PrimaryButton from '../../../Sheare/PrimaryButton/PrimaryButton';

const HomeContact = () => {
    return (
        <div>
            <div>
                <h1 className="text-center">Contact Us</h1>
                <h1 className="text-center">Stay connected with us</h1>
                <from>
                    <input className="block mt-4 py-4 w-72 mx-auto px-3 " type="email" placeholder='Email Address'/>
                    <input className="block mt-4 py-4 w-72 mx-auto px-3 " type="text" placeholder='Subject'/>
                    <textarea className="block mt-4 py-4 w-72 mx-auto px-3 " placeholder='Your message'></textarea>
                    <PrimaryButton>Submit</PrimaryButton>
                </from>
            </div>
        </div>
    );
};

export default HomeContact;