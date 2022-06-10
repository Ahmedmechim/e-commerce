import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBarr = ({setSearch, search}) => {
  const  product  = useSelector((state) => state.product);
  const {shoppingCart}=product

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">
            E-commerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <Link className="nav-link active" aria-current="page" to="/">
              <li className="nav-item">
                  Home
              </li>
                </Link>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <input value={search}
              onChange={e=>setSearch(e.target.value)} 
              />
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <Link  to="/shoppingCart">
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {shoppingCart.length}
                </span>
              </button>
            </form>
            </Link>
            <Link to="/profile">
            <button className="btn ml-5 btn-outline-dark" >
              <i className="bi bi-person-circle" ></i>
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarr;
