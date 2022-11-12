import React from "react";
import svg from "../../../assets/icons/quote.svg";
import people from "../../../assets/images/people.jpg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const reviewData = [
    {
      id: 1,
      name: "Md Hanif",
      img: people,
      review:
        "This is a good dental clinic. As a doctor I can ensure that, the doctors of this clinic is qualified.",
      location: "Dhaka",
    },
    {
      id: 2,
      name: "Winson Herry",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
      location: "California",
    },
    {
      id: 3,
      name: "Julia Grande",
      review:
        "A good dental clinic should have highly skilled and qualified dentists in all dental specialities.",
      img: people2,
      location: "Canada",
    },
  ];
  return (
    <section>
      <div className="flex justify-between py-16 px-3">
        <div>
          <h4 className="text-xl font-bold text-primary">Testimonial</h4>
          <h1 className="text-4xl font-normal">What Our Patients Says</h1>
        </div>
        <figure>
          <img src={svg} alt="" className="w-24 lg:w-48" />
        </figure>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewData.map((data) => (
          <TestimonialCard key={data.id} data={data}></TestimonialCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
