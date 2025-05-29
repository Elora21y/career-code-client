import React from "react";
import { useParams } from "react-router";
import UseAuth from "../hooks/UseAuth";
import axios from "axios";
import toast from "react-hot-toast";

const ApplyJob = () => {
  const {id : jobId} = useParams();
  const { users } = UseAuth();
  // console.log(id)
  // console.log(users)
  const handleApplyJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const github = form.github.value
    const linkedin = form.linkedin.value
    const resume = form.resume.value
    console.log(github,linkedin, resume)

    const application = {
        jobId,
        applicant_email : users.email,
        github,
        linkedin,
        resume
    }
    axios.post('http://localhost:2100/applications' , application)
    .then(res =>{
        console.log(res.data)
        if(res.data.insertedId) {
            toast.success('Successfully Apply the Job')
        }
    })
    .catch(error =>{
        console.log(error.message)
    })
  };
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <form onSubmit={handleApplyJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Page details</legend>
{/* GitHub */}
          <label className="label">GitHub</label>
          <input type="url" className="input" placeholder="GitHub" name="github"/>
          {/* LinkedIn */}
          <label className="label">LinkedIn</label>
          <input type="url" className="input" placeholder="LinkedIn" name="linkedin"/>
          {/* Resume */}
          <label className="label">Resume</label>
          <input type="url" className="input" placeholder="Resume" name="resume"/>

          <button type="submit" className="btn btn-primary"> Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default ApplyJob;
