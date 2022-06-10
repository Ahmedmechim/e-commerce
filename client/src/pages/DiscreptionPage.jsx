import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import ItemDicreption from "../components/ItemDicreption";
import NavBarr from "../components/NavBarr";

const DiscreptionPage = () => {
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
  return (
    <div>
      <NavBarr />
      <ItemDicreption />
      <Footer />
    </div>
  );
};

export default DiscreptionPage;
