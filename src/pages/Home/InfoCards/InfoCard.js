import React from "react";

const InfoCard = ({ data }) => {
  const { name, icon, description, bgClass } = data;
  return (
    <div className={`card lg:card-side shadow-xl text-white p-6 ${bgClass}`}>
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
