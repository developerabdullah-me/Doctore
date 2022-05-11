import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookModal from "../BookModal";
import SingleAvailableAppointment from "./SingleAvailableAppointment/SingleAvailableAppointment";

const AvailableAppointment = ({ date }) => {
    const [services,setServices]=useState([])
    const [treatment,setTreatment]=useState(null)
    useEffect(() =>{
        fetch('service.json')
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])
  return (
    <div >
      <h1 className="text-5xl text-primary text-center">
        AvailableAppointment:{format(date, "PP")}
      </h1>
      <div>
        
       <div className="grid md:grid-cols-3 gap-7 px-12 mt-11 ">
       {
            services.map(service => <SingleAvailableAppointment 
                service={service}
                 key={service._id}
                 setTreatment={setTreatment}
                 ></SingleAvailableAppointment>)
        }
       </div>
       {treatment && <BookModal treatment={treatment}
                 date={date}
                 setTreatment={setTreatment}

       ></BookModal>}
      </div>
    </div>
  );
};

export default AvailableAppointment;
