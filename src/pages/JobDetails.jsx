import React from 'react';
import { CgCalendarDates } from 'react-icons/cg';
import { FaArrowRightLong } from 'react-icons/fa6';
import { SiGooglemaps } from 'react-icons/si';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link, useLoaderData} from 'react-router';

const JobDetails = () => {
    const {title,status,location,company,_id, category,applicationDeadline,description,salaryRange, company_logo, jobType,requirements,responsibilities
} = useLoaderData()
    // console.log(job)

    return (
        <div className="card bg-base-100 mx-auto max-w-xl shadow-sm border border-gray-100 p-5 my-10 space-y-5 text-sm">
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
          <div className="">
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p className='mb-4 flex gap-2 items-center mt-1 text-gray-300'><CgCalendarDates />{applicationDeadline} 
                <span className='border border-yellow-200 px-2 pb-[2px] rounded-2xl text-yellow-400 text-xs'>{category} </span> 
                <span className='border border-green-300 px-2 pb-[2px] rounded-2xl text-green-200 text-xs'>{jobType}</span> </p>

            <p>{description}</p>
            
          </div>
          {/* requirement */}
          <div className="space-y-2">
            <h2 className='text-xl font-semibold'>Requirements : </h2>
            <ul className='list-disc'>
                {
                requirements.map((req , index)=> <li key={index} className='ml-6'>
                    {req}
                </li>)
            }
            </ul>
          </div>
          {/* responsibilities */}
          <div className="space-y-2">
            <h2 className='text-xl font-semibold'>Responsibilities : </h2>
            <ul className='list-disc'>
                {
                responsibilities.map((req , index)=> <li key={index} className='ml-6'>
                    {req}
                </li>)
            }
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <p className='text-pink-400 flex items-center '>
                <TbCurrencyTaka size={17}/> {salaryRange.max}-{salaryRange.min}</p>
              <Link to={`/job-apply/${_id}`} className='btn flex gap-2 btn-primary btn-outline'>Apply Now
               <FaArrowRightLong /></Link>
            </div>
        </div>
    );
};

export default JobDetails;