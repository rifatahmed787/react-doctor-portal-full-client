import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({
  serviceModal,
  selectedDate,
  setServiceModal,
  refetch,
}) => {
  const { name: treatmentName, slots } = serviceModal;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);

  const handleBookingForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const BooikingData = {
      selectedDate: date,
      treatment: treatmentName,
      name: name,
      slot,
      email,
      phone,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(BooikingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setServiceModal(null);
          toast.success("Booking confirmed");

          //refetch for refresh the site
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-6">{treatmentName}</h3>
          <form
            onSubmit={handleBookingForm}
            className="grid grid-cols-1 gap-6 py-3"
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered input-md w-full"
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              defaultValue={user?.displayName}
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered input-md w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-md w-full"
            />
            <input
              defaultValue={user?.email}
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered input-md w-full"
            />
            <input type="submit" value="Submit" className="btn w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
