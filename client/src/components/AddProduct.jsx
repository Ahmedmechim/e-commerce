import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';

const AddProduct = () => {
  const dispatch = useDispatch()
  
  const  product  = useSelector((state) => state.product);
  const {categories}=product
  const theUsers = useSelector((state) => state.user);
  const { user } = theUsers;
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState("");
  const [discreption, setDiscreption] = useState("");
  const [prix, setPrix] = useState("")
  const [quantity, setQuantity] = useState("");
  const cat=categories.map((el)=>el.categorieName);
  const [categorie, setValue] = React.useState(cat[0]);
  const [inputValue, setInputValue] = React.useState("");
const handelAdd=(e)=>{
    e.preventDefault();
    dispatch(AddProduct({productName, image,prix, discreption, quantity, categorie}))
    setProductName('')
    setImage('')
    setDiscreption('')
    setPrix('')
    setQuantity('')
    setValue(cat[0])
    setInputValue('')
}
  return (
    <div>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1>{`Add product ${user.userName}`} </h1>
        <Autocomplete
          value={categorie}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={cat}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="catégorie" />}
        />
        <TextField
          id="standard-basic"
          sx={{ width: 300 }}
          label="Nom du produit"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          sx={{ width: 300 }}
          label="Photo du produit"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <TextField
          id="standard-basic"
          sx={{ width: 300 }}
          label="Prix du produit"
          type="text"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
        />
        <TextField
          id="standard-basic"
          sx={{ width: 300 }}
          label="Quantité disponible"
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <TextField
          id="standard-basic"
          sx={{ width: 300 }}
          label="Détails sur le produit"
          type="text"
          value={discreption}
          onChange={(e) => setDiscreption(e.target.value)}
        />
              <Button variant="contained" onClick={handelAdd}>ajouter</Button>

      </div>
    </div>
  );
};

export default AddProduct;
