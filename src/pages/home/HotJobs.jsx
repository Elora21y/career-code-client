import React, { use } from 'react';
import JobCard from '../../shared/JobCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise)
    // console.log(jobs)
    return (
       <div className="my-15 p-5">
        <h2 className='text-3xl text-center lg:text-5xl font-semibold'>Hot Jobs of The Day</h2>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10'>
            {
                jobs.filter(job => job.status === 'active')
                .map(job => <JobCard key={job._id} job = {job}></JobCard>)
            }
        </div>
       </div>
    );
}; 

export default HotJobs;