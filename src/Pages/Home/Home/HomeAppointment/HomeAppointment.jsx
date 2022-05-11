import React from 'react';
import PrimaryButton from '../../../Sheare/PrimaryButton/PrimaryButton';

const HomeAppointment = () => {
    return (
        <div className="mt-32" style={{background:`url(${`https://i.ibb.co/64SHrxW/appointment.png`})`}}>
           
<div className=" flex items-center justify-center px-10">
    <img className='flex-1 hidden lg:block mt-[-150px]' src='https://i.ibb.co/fDz82r6/doctor-small.png' alt="" />
    <div className="flex-1 text-left">
        <h1 className="text-primary font-bold text-xl">Appointment</h1>
        <h1 className='text-4xl pt-5 text-white'>Make an appointment Today</h1>
        <p className='text-white pt-6 pb-28 text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

        <PrimaryButton>Get start</PrimaryButton>
    </div>
</div>
        </div>
    );
};

export default HomeAppointment;