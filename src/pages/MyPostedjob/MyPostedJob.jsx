import React, { Suspense } from 'react';
import UseAuth from '../../hooks/UseAuth';
import JobList from './JobList';
import { AddJobPromise } from '../../api/MyJobApi';

const MyPostedJob = () => {
    const {users} = UseAuth()
    return (
        <div>
        <Suspense>
            <JobList
            AddJobPromise={AddJobPromise(users.email)}
            ></JobList>
        </Suspense>
        </div>
    );
};

export default MyPostedJob;