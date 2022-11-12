import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div className="hero py-24">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="w-[458px] rounded-lg shadow-2xl"
          alt=""
        />
        <div className="lg:w-1/2 lg:px-16">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className=" text-base my-6">
            Our team believe that a positive dental experience depends on a
            certain level of comfort and trust, which is why we put an emphasis
            on providing a relaxed setting and open communication. The friendly,
            attentive staff at Bupa Dental will listen to your concerns and take
            time to explain your treatment options in an easy-to-understand
            manner.
          </p>
          <button className="btn btn-primary absolute">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
