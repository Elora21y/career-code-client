import React, { Suspense, useEffect, useState } from 'react';
import ApplicationList from '../components/ApplicationList';
import axios from 'axios';
import UseAuth from '../hooks/UseAuth';
import { MyApplicationsPromise } from '../api/Applications';

const MyApplication = () => {
    const {users} = UseAuth()
// const [list , setList] = useState([])
// useEffect(()=>{
//     axios.get(`http://localhost:2100/applications?email=${users.email}`)
//     .then(data => {
//         setList(data.data)
//     })
//     .catch(error =>{
//         console.log(error)
//     })
// },[users.email])
// console.log(list)

    return (
        <div>
            <Suspense fallback ={'Loading your application'}>
                <ApplicationList MyApplicationsPromise = {MyApplicationsPromise(users.email)}/>
            </Suspense>
        </div>
    );
};

export default MyApplication;