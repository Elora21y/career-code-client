import React, { use } from 'react';
import ApplicationRow from './ApplicationRow';

const ApplicationList = ({MyApplicationsPromise}) => {
    const applications = use(MyApplicationsPromise)
    console.log(applications)
    return (
       <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Email Address</th>
      </tr>
    </thead>
    <tbody>
     {
        applications.map((application,index)=>(
             <ApplicationRow 
            key={application._id} index={index} application={application}
            ></ApplicationRow>
        ) )
     }
      
    </tbody>
  </table>
</div>
    );
};

export default ApplicationList;