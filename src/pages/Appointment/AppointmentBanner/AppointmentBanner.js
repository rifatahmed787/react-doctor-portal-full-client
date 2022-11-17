import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero py-40" style={{ background: `url(${bg})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt="dental-chair"
          className="w-80 lg:w-[594px] rounded-lg shadow-2xl lg:ml-20"
        />
        <div className="w-[312px] shadow-lg rounded-lg">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={(data) => {
              if (data) {
                setSelectedDate(data);
              }
            }}
          ></DayPicker>
          <p className="text-center pb-3">
            You have selected date: {format(selectedDate, "PP")}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
