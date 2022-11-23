import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigation } from "react-day-picker";
import { useLoaderData } from "react-router-dom";
import Loading from "../shared/Loading";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_PK);

const Payment = () => {
  const bookings = useLoaderData();
  const { treatment, selectedDate, slot, price } = bookings;
  //when we use useLoader we can use useNavigation for loading data
  // const navigation = useNavigation();
  // if (navigation?.state === "loading") {
  //   return <Loading></Loading>;
  // }
  return (
    <div>
      <h3 className="text-3xl mb-6 ml-3">Payment for {treatment}</h3>
      <p className="text-xl  ml-3">
        Please pay <strong>{price}tk</strong> for your appointment on{" "}
        {selectedDate} at {slot}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckOutForm bookings={bookings}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
