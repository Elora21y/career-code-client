import React from "react";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import toast from "react-hot-toast";

const AddJob = () => {
const {users} = UseAuth()

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target
    const formData = new FormData(form)
    const {min,max,currency , ...newJob} = Object.fromEntries(formData.entries())
    // console.log(data)
    newJob.salaryRange = {min,max,currency}

    //requirement
    newJob.requirements = newJob.requirements.split(',').map(req => req.trim()).filter(req => req !== '')

    //responsibilities
    newJob.responsibilities = newJob.responsibilities.split(',').map(req => req.trim()).filter(req => req !== '')

    newJob.status = 'active'
    // console.log(newJob)
    // const today = new Date()
    // const deadline = new Date(newJob.applicationDeadline)
    // if(today < deadline) {
    //   newJob.status ='active'
    // }
    // else{
    //   newJob.status ='inactive'
    // }

    axios.post('http://localhost:2100/jobs' , newJob)
    .then(res => {
      console.log(res.data)
      if(res.data.insertedId){
        toast.success('Add Your Job Successfully')
      }
    })
    .catch(err =>{
      console.log(err)
    })
  };
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <form onSubmit={handleAddJob}>
        <legend className="mb-3 text-3xl font-bold text-center">
          Add Job
        </legend>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 max-w-lg mx-auto">
          <label className="label">Job Title</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Job Title"
            name="title"
          />

          <label className="label">Company Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Company Name"
            name="company"
          />

          <label className="label">Company Location</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Company Location"
            name="location"
          />

          <label className="label">Company Logo </label>
          <input
            type="url"
            className="input w-full"
            placeholder="Company Logo URL"
            name="company_logo"
          />
        </fieldset>

        {/*job type selected */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4  max-w-lg mx-auto"> 
          <legend className="fieldset-legend">Select job type</legend>
          <div className="filter ">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value='Hybrid'
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value='Remote'
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Part-Time"
              value='Part-Time'
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Contractual"
              value='Contractual'
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Intern"
              value='Intern'
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Full-Time"
              value='Full-Time'
            />
          </div>
        </fieldset>
        {/* select Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 filter max-w-lg mx-auto">
          <legend className="fieldset-legend">Category</legend>
          <select defaultValue="Select job category" className="select w-full" name="category">
            <option disabled={true}>Select job category</option>
            <option>Engineering</option>
            <option>Development</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
            <option>Management</option>
            <option>Data Science</option>
            <option>Design</option>
          </select>
        </fieldset>
        {/* select a date */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 max-w-lg mx-auto">
          <legend className="fieldset-legend ">Category</legend>
          <label className="input w-full">
            <span className="label ">Publish date</span>
            <input type="date" name="applicationDeadline" />
          </label>
        </fieldset>

        {/* salary range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box max-w-lg mx-auto border p-4">
          <legend className="fieldset-legend">Salary Range</legend>
          <div className="flex items-center gap-2">
            <div>
            <label className="label">Min Salary</label>
            <input
              type="number"
              className="input"
              placeholder="Min Salary"
              name="min"
            />
          </div>
          <div>
            <label className="label">Max Salary</label>
            <input
              type="number"
              className="input"
              placeholder="Max Salary"
              name="max"
            />
          </div>
          <div>
            <label className="label"> Currency</label>
            <select defaultValue="Select Currency" className="select" name="currency">
              <option disabled={true}>Select Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>EU</option>
            </select>
          </div>
          </div>
        </fieldset>

        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box max-w-lg mx-auto border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea className="textarea w-full" placeholder="Job Description" name="description"></textarea>
        </fieldset>

        {/* Job requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box max-w-lg mx-auto border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea className="textarea w-full" placeholder="Job Requirements" name="requirements"></textarea>
        </fieldset>

        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box max-w-lg mx-auto border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea className="textarea w-full" placeholder="Job Responsibilities" name="responsibilities"></textarea>
        </fieldset>

{/* Hr Information */}
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 max-w-lg mx-auto">
          <label className="label">HR Name</label>
          <input
            type="text"
            className="input"
            placeholder="HR Name"
            name="hr_name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            className="input"
            placeholder="HR Email"
            name="hr_email"
            readOnly
            defaultValue={users.email}
          />

        </fieldset>

        {/* button */}
        <button type="submit" className="btn">
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
