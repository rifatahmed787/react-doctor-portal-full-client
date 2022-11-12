import React from "react";
import img1 from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div className="hero">
      <figure>
        <img src={bg} alt="" />
      </figure>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img1} className="rounded-lg shadow-2xl w-1/2" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Normally the body's natural defenses and good oral health care, such
            as daily brushing and flossing, keep bacteria under control.
            However, without proper oral hygiene, bacteria can reach levels that
            might lead to oral infections, such as tooth decay and gum disease.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
