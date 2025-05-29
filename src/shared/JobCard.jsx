import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { SiGooglemaps } from 'react-icons/si';
import { Link } from 'react-router';

const JobCard = ({job}) => {
    const {title,status,location,company,_id, description,salaryRange, company_logo, 
} = job
    return (
        <div className="card bg-base-100  shadow-sm border border-gray-100 p-4">
  <div className="flex gap-4">
    <figure>
    <img
      src={company_logo}
      alt="logo" 
      className='w-13'/>
  </figure>
  <div>
    <h2 className="card-title">
      {company}
      {
        status === 'active' && <div className="badge badge-secondary">{status}</div>
      }
    </h2>
    <p className='flex gap-1 text-xs items-center'><SiGooglemaps /> {location}</p>
  </div>
  </div>
  <div className="card-body">
    <h3 className='text-xl font-semibold'>{title}</h3>
    <p>$ {salaryRange.max}-{salaryRange.min}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/job-details/${_id}`} className='btn flex gap-2'>View Details <FaArrowRightLong /></Link>
    </div>
  </div>
</div>
    );
};

export default JobCard;