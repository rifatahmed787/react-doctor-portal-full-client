import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../shared/Loading";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        // console.log(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleCancel = () => {
    setDeletingDoctor(null);
  };

  const handleDeleteDoctors = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Doctor ${doctor.name} deleted successfully`);
        }
      });
  };

  if (isLoading) {
    <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-3xl">Manage Doctors {doctors?.length}</h2>
      <div className="overflow-x-auto mx-3 mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.length > 0 &&
              doctors.map((doctor, i) => (
                <tr key={doctor._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={doctor.image} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <label
                      onClick={() => setDeletingDoctor(doctor)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure want to delete?`}
          message={`If you delete ${deletingDoctor.name}, he/she will not be available.`}
          handleDeleteDoctors={handleDeleteDoctors}
          modalData={deletingDoctor}
          handleCancel={handleCancel}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
