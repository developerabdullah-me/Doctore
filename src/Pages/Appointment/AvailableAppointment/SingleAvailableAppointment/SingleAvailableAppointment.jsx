import React from 'react';

const SingleAvailableAppointment = (props) => {
    const {name,slots}=props.service;
    return (
        <div className="shadow p-5 text-center w-96 rounded">
            <h1 className="text-primary font-bold text-2xl">{name}</h1>
          <p className='py-3'>
            {
                slots.length > 0 ? 
                <span>  {slots[0]}</span> :
                <span className="text-red-500">not slots available</span> 

            }
          </p>
            <p className="py-3">{slots.length} {slots.length > 1 ? 'space':  'space'} Available </p>

            <button disabled={slots.length === 0} className="bg-primary  px-7 py-3 rounded text-white font-bold">Book Appointment</button>
        </div>
    );
};

export default SingleAvailableAppointment;