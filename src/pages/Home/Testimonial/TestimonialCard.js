import React from "react";

const TestimonialCard = ({ data }) => {
  const { name, img, review, location } = data;
  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <p>{review}</p>
        <div className="flex items-center justify-start mt-2">
          <div className="avatar">
            <div className="w-16 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>

          <div>
            <h3>{name}</h3>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
