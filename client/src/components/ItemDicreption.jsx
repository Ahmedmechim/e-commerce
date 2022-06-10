import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { handelAdd } from "../Redux/ProductAction";

const ItemDicreption = ({match}) => {
  const  product  = useSelector((state) => state.product);
  const {allProducts}=product
  let params = useParams();
  let aProduct = allProducts.find((el) => el._id == params.id);
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={aProduct.image}
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="small mb-1">{`ref: ${aProduct._id}`}</div>
            <h1 className="display-5 fw-bolder">{aProduct.productName}</h1>
            <div className="fs-5 mb-5">
              <span className="text-decoration-line-through"></span>
              <span>{`${aProduct.prix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DT`}</span>
            </div>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium at dolorem quidem modi. Nam sequi consequatur
              obcaecati excepturi alias magni, accusamus eius blanditiis
              delectus ipsam minima ea iste laborum vero?
            </p>
            <div className="d-flex">
              <input
                className="form-control text-center me-3"
                id="inputQuantity"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
              />
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(handelAdd(aProduct._id,aProduct.productName,aProduct.image,quantity,aProduct.prix,aProduct.userID))
                }}
              >
                <i className="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDicreption;
