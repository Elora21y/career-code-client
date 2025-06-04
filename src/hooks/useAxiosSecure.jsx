import axios from 'axios';
import React from 'react';
import UseAuth from './UseAuth';

const axiosInstance = axios.create({
    baseURL : 'http://localhost:2100'
})

const UseAxiosSecure = () => {
    const {users} = UseAuth()
    // console.log(users.accessToken)
    axiosInstance.interceptors.request.use(config =>{
        config.headers.authorization = `Bearer vfvnfdivnefuivvj${users?.accessToken}`
        return config
    })
    return axiosInstance;
};

export default UseAxiosSecure;