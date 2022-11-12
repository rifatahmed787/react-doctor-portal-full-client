import React from "react";
import appoinment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/primaryButton/PrimaryButton";

const Contact = () => {
  return (
    <div
      className="text-center mt-16 py-16"
      style={{ background: `url(${appoinment})` }}
    >
      <h4 className="text-secondary text-xl font-bold">Contact Us</h4>
      <h2 className="text-4xl text-white">Stay connected with us</h2>
      <input
        type="text"
        placeholder="Email Address"
        className="input input-bordered input-sm w-[330px] lg:w-[450px] h-12 mt-5 mb-3"
      />
      <br />
      <input
        type="text"
        placeholder="Subject"
        className="input input-bordered input-sm w-[330px] lg:w-[450px] h-12 mb-3"
      />
      <br />
      <textarea
        className="textarea textarea-accent w-[330px] lg:w-[450px] h-[136px] mb-5"
        placeholder="Your message"
      ></textarea>
      <br />
      <PrimaryButton>Submit</PrimaryButton>
    </div>
  );
};

export default Contact;
