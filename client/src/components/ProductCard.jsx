import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  return (
    <div>
      <div className="col mb-5">
        <div className="card h-100">
          {/* <!-- Product image--> */}
          <img
            className="card-img-top"
            id="product-image"
            src={product.image}
            alt="..."
          />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{`${product.productName.substring(0,20)}...`}</h5>
              {/* <!-- Product price--> */}
              {`${product.prix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} DT`}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">

              <Link className="btn btn-outline-dark mt-auto" to={`/discreption/${product._id}`}>
                View options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
