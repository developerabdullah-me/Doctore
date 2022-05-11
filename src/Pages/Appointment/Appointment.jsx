import React, { useState } from "react";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";
import BannerAppointment from "./BannerAppointment/BannerAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <BannerAppointment date={date} setDate={setDate}></BannerAppointment>
      <AvailableAppointment date={date}></AvailableAppointment>
    </div>
  );
};

export default Appointment;
