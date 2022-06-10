import React from 'react'
import { useSelector } from 'react-redux';
import Login from '../components/Login';
import NavBarr from '../components/NavBarr';
import OwnerProduct from '../components/OwnerProduct';
import Profile from '../components/Profile';

const ProfilePage = () => {
    const  any  = useSelector((state) => state.any);
    const {isLoading,isError}=any
    const theUsers = useSelector((state) => state.user);
    const { user } = theUsers;
  
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
  return (
    <div>
        <NavBarr/>
        {user?<Profile/>:<Login/>}
    </div>
  )
}

export default ProfilePage