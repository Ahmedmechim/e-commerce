import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Redux/userAction";
import { Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { getCategories } from "../Redux/ProductAction";
import OwnerProduct from "./OwnerProduct";

const Profile = () => {
  const theUsers = useSelector((state) => state.user);
  const { user } = theUsers;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(logOut());
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>{`welcome ${user.userName}`} </h1>
          <Button
            variant="primary"
            type="submit"
            onClick={handelSubmit}
            style={{ margin: "10px" }}
          >
            logOut
          </Button>
          {user.role === "admin" || user.role === "vendeur" ? (
            <Link to="/addProuduct">
              <Button variant="primary" type="submit">
                Add product{" "}
              </Button>
            </Link>
          ) : (
            <></>
          )}
          <OwnerProduct />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default Profile;
