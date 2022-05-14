import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookModal from "../BookModal";
import SingleAvailableAppointment from "./SingleAvailableAppointment/SingleAvailableAppointment";

const AvailableAppointment = ({ date }) => {
    const [services,setServices]=useState([])
    const [treatment,setTreatment]=useState(null)
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])

    useEffect(() =>{
      console.log(treatment)
    },[treatment])
  return (
    <div className='my-10'>
            <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <SingleAvailableAppointment
                      key={service._id}
                      service={service}
                      setTreatment={setTreatment}
                    ></SingleAvailableAppointment>)
                }
            </div>
            {treatment &&<BookModal
                 date={date}
                 treatment={treatment}
                 setTreatment={setTreatment}
            ></BookModal>}
        </div>
  );
};

export default AvailableAppointment;
