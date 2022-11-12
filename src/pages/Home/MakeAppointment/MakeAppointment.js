import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/primaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="mt-16" style={{ background: `url(${appointment})` }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row text-white">
          <img
            src={doctor}
            className="-mt-32 lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h4 className="text-primary text-lg font-bold">Appointment</h4>
            <h1 className="text-4xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              Always make sure that you confirm appointments when you make them.
              When you make an appointment in English by phone be sure to
              confirm the appointment by repeating the date and time of the
              meeting back to the other party and asking if that is correct.
              This should be one of the last things you do prior to ending the
              conversation.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
