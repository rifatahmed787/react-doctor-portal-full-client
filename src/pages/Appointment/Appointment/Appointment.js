import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppoointment from "../AvialableAppointment/AvailableAppoointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvailableAppoointment
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AvailableAppoointment>
    </div>
  );
};

export default Appointment;
