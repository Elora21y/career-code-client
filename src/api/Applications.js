export const MyApplicationsPromise= (email  ,accessToken) => fetch(`http://localhost:2100/applications?email=${email}`,{
    headers : {
        authorization : `Bearer ${accessToken}`
    }
} 
).then(res => res.json())
.catch(err =>{
    console.log(err)
})