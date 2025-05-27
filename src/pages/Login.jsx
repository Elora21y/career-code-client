import Lottie from 'lottie-react';
import React from 'react';
import LoginLottie from '../assets/lottie/login.json'

const Login = () => {
   const handleSignUp = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        const formInformation = Object.fromEntries(formData.entries())
        console.log(formInformation)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <Lottie animationData={LoginLottie} loop ={true}/>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <form onSubmit={handleSignUp}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email'/>
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password'/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
      </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;