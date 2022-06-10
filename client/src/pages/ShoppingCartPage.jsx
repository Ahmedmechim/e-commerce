import React from 'react'
import { useSelector } from 'react-redux';
import NavBarr from '../components/NavBarr';
import ShoppingCart from '../components/ShoppingCart'

const ShoppingCartPage = () => { const  any  = useSelector((state) => state.any);
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
  return (
    <div>
    <NavBarr/>
    <ShoppingCart/>
    </div>
  )
}

export default ShoppingCartPage