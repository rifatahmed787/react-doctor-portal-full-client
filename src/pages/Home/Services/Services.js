import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride treatments are a great way to prevent more cavities in patients.",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "A cavity filling brings back the functionality and appearance of the tooth.",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Teeth whitening involves bleaching your teeth to make them lighter.",
      img: whitening,
    },
  ];

  return (
    <div className="mt-20">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary uppercase">
          our services
        </h3>
        <h2 className="text-3xl font-bold ">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[34px] mt-10">
        {serviceData.map((data) => (
          <ServiceCard key={data.id} data={data}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
