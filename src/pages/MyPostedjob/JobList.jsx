import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ AddJobPromise }) => {
  const jobs = use( AddJobPromise );
  console.log(jobs)
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                No.
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Apply Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                jobs.map((job , index) => 
                    <tr key={job._id}>
              <th>
                {index+1}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={job.company_logo}
                        alt={job.company}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{job.company}</div>
                    <div className="text-sm opacity-50">{job.location}</div>
                  </div>
                </div>
              </td>
              <td>
                {job.title}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {job.category}
                </span>
              </td>
              <td>{job.jobType}</td>
              <td>
                {job.application_count}
              </td>
              <th>
                <Link to={`/applications/${job._id}`} className="btn btn-xs">!</Link>
              </th>
            </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
