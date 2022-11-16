import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import AvailableAppointmentCard from "./AvailableAppointmentCard";
import BookingModal from "./BookingModal";

const AvailableAppoointment = ({ selectedDate }) => {
  // const [services, setServices] = useState([]);
  const [serviceModal, setServiceModal] = useState(null);

  const { data: services = [] } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointments");
      const data = await res.json();
      return data;
    },
  });

  //using react-query for fetching data
  // const { data: services = [] } = useQuery({
  //   queryKey: ["appointments"],
  //   queryFn: () =>
  //     fetch("http://localhost:5000/appointments").then((res) => res.json()),
  // });

  //using useEffect for fetching data
  // useEffect(() => {
  //   fetch("http://localhost:5000/appointments")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);
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
