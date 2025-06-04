import React, { Suspense } from 'react';
import UseAuth from '../../hooks/UseAuth';
import JobList from './JobList';
import useJobApi from '../../api/useJobApi';
// import { AddJobPromise } from '../../api/MyJobApi';

const MyPostedJob = () => {
    const {users} = UseAuth()
const {AddJobPromise} = useJobApi()
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