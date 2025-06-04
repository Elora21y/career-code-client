import React from "react";
import UseAxiosSecure from "../hooks/UseAxiosSecure";

const useApplicationApi = () => {
  const axiosSecure = UseAxiosSecure();
  const myApplicationsPromise = (email) => {
    return axiosSecure
      .get(`/applications?email=${email}`)
      .then((res) => res?.data);
  };
  return {
    myApplicationsPromise,
  };
};

export default useApplicationApi;
