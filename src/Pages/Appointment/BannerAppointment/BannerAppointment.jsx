import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const BannerAppointment = () => {
    const [date,setDate]=useState(new Date())
    return (
        <div>
<div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
  <img className="w-2/3"src="https://i.ibb.co/StRFvLy/chair.png" alt="" />
    <div>
      <div className='md:pr-16'>
 <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
    //   footer={footer}
    />
    <p>you have selected a date:{format (date,'PP')}</p>
 </div>
    </div>
  </div>
</div>



         
        </div>
    );
};

export default BannerAppointment;