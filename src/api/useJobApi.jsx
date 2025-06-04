import React from 'react';
import UseAxiosSecure from '../hooks/UseAxiosSecure';

const useJobApi = () => {
    const axiosSecure = UseAxiosSecure()
    const AddJobPromise = email =>{
        return axiosSecure.get(`/jobs/applications?email=${email}`).then(res => res.data)
    }
    return {
        AddJobPromise
    }
};

export default useJobApi;