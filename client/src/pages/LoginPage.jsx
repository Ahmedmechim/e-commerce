import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "../components/Login";
import NavBarr from "../components/NavBarr";



const LoginPage = () => {
    const  any  = useSelector((state) => state.any);
    const {isLoading,isError}=any
    if (isLoading)
    return (
        <div className='mt-5'>
            <h1>Loading....</h1>
            {}
        </div>
    )
  if (isError)
    return (
        <div >
            <h1>failed to get the data please try later</h1>
            {}
        </div>
    )
  if (localStorage.getItem("token"))
    return (
        <Navigate to="/profile"/>
    )
  return (
   <div>
       <NavBarr/>
       <Login/>
   </div>
  );
};

export default LoginPage;