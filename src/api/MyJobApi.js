export const AddJobPromise = email => fetch(`http://localhost:2100/jobs/applications?email=${email}` , {credentials : 'include'}).then(res => res.json()).catch(err =>{
    console.log(err.message)
})