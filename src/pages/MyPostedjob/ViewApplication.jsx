import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";

const ViewApplication = () => {
//   const param = useParams();
//   console.log(param);
  const applications = useLoaderData();
//   console.log(applications);
  const handleStatusUpdate = (e , id) =>{
    const update = e.target.value
    console.log(update , id)
    axios.patch(`http://localhost:2100/applications/update/${id}` , { update})
    .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount){
            toast.success('Status Added')
        }
    })
    .catch(err =>{
        console.log(err.message)
    })
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((apply, index) => (
              <tr key={apply._id}>
                <th>{index + 1}</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <select onChange={e => handleStatusUpdate(e, apply._id)}
                  defaultValue="Update Status" className="select">
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Hired</option>
                    <option>Interview</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
