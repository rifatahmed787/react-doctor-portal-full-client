import React from "react";
import PrimaryButton from "../../../components/primaryButton/PrimaryButton";

const AvailableAppointmentCard = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card  shadow-xl w">
      <div className="card-body">
        <h2 className="card-title justify-center text-primary font-bold">
          {name}
        </h2>
        <p className="text-center pt-2">
          {slots.length > 0 ? slots[0] : "Try another day"}
        </p>
        <p className="text-center py-2">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <PrimaryButton>Book Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointmentCard;
