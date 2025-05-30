import React from "react";

const AddJob = () => {
    const handleAddJob = (e) =>{
        e.preventDefault()
    }
  return (
    <div>
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Add Job </legend>

          <label className="label">Title</label>
          <input type="text" className="input" placeholder="My awesome page" />

          <label className="label">Slug</label>
          <input type="text" className="input" placeholder="my-awesome-page" />

          <label className="label">Author</label>
          <input type="text" className="input" placeholder="Name" />
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
