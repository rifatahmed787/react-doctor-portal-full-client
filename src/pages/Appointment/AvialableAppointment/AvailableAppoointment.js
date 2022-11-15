import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AvailableAppointmentCard from "./AvailableAppointmentCard";
import BookingModal from "./BookingModal";

const AvailableAppoointment = ({ selectedDate }) => {
  const [services, setServices] = useState([]);
  const [serviceModal, setServiceModal] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section>
      <p className="text-center text-secondary font-bold mt-3">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20 pt-10 px-5">
        {services.map((service) => (
          <AvailableAppointmentCard
            key={service._id}
            service={service}
            setServiceModal={setServiceModal}
          ></AvailableAppointmentCard>
        ))}
      </div>
      {serviceModal && (
        <BookingModal
          serviceModal={serviceModal}
          selectedDate={selectedDate}
          setServiceModal={setServiceModal}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppoointment;
