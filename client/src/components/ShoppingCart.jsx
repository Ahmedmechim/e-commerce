import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { handelDelete } from "../Redux/ProductAction";
import { Navigate } from "react-router-dom";
// import { addOrder, handelDelete } from "../redux/action";

const ShoppingCart = () => {
    const  product  = useSelector((state) => state.product);
    const theUsers = useSelector((state) => state.user);
  const { user } = theUsers;
    const {shoppingCart}=product
  
  let order = shoppingCart;
  const dispatch = useDispatch();
  
  let total = 0;

  const conf = ()=>{
    // e.preventDefault();
    if(user){
alert("your order is sent")
  
    }
else{
alert("login first")
}
  }
  return (
    <div>
      {shoppingCart.length === 0 ? (
        <h5>votre panier est vide</h5>
      ) : (<div>

        <table>
          <thead>
            <tr>
              <td style={{ width: "720px" }}>
                <h4>ARTICLE</h4>
              </td>
              <td style={{ width: "220px" }}>
                <h4>QUANTITÉ</h4>
              </td>
              <td style={{ width: "220px" }}>
                <h4>PRIX UNITAIRE</h4>
              </td>
              <td style={{ width: "220px" }}>
                <h4>SOUS-TOTAL</h4>
              </td>
            </tr>
          </thead>
          <tbody>
            {shoppingCart.map((el) => (
              <tr>
                {" "}
                <td style={{ display: "flex", textAlign: "left" }}>
                  <img
                    style={{ width: "120px", height: "120px" }}
                    className=""
                    src={el.image}
                    alt=""
                  />
                  <div>
                    <p className="name">{el.name}</p>
                    <Button
                      variant="contained"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(handelDelete(el.id));
                      }}
                    >
                      supprimer
                    </Button>
                  </div>
                </td>
                <td>
                  {" "}
                  <p>{Number(el.quantity)}</p>
                
               
                </td>
                <td>
                  {" "}
                  <p>{Number(el.prix)}</p>
                </td>
                <td>
                  <p>{Number(el.prix) * Number(el.quantity)}</p>
                </td>
              </tr>
            ))}
            <tr>
              {shoppingCart
                .map((el,i) => Number(el.prix) * Number(el.quantity))
                .forEach((sousTotal) => (total += sousTotal))}
              <td></td>
              <td></td>
              <td>
                <h4>TOTAL:</h4>
              </td>
              <td>
                <h4>{`${total} DT`}</h4>
              </td>
            </tr>
          </tbody>
         
        </table>
        <Button
            variant="contained"
            onClick={()=>conf()}
          >
            confirmer
          </Button>
      </div>
      )}
    </div>
  );
};

export default ShoppingCart;
