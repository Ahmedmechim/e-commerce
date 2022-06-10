import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import NavBarr from '../components/NavBarr'
import ProductList from '../components/ProductList'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/ProductAction';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";




const HomePage = () => {
  const  product  = useSelector((state) => state.product);
  const  any  = useSelector((state) => state.any);
  const {allProducts,categories}=product
  const {isLoading,isError}=any
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getProducts())
  }, [])
  const [search, setSearch] = React.useState('')
  const cat=categories.map((el)=>el.categorieName);
  const [categorie, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  console.log(inputValue)
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
      <NavBarr search={search} setSearch={setSearch}/>
      <div className='filter'>
        <h2>Filter by category:</h2>
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
      </div>
      
      <ProductList allProducts={!inputValue?allProducts.filter(el=>el.productName.toLowerCase().includes(search.toLowerCase())):allProducts.filter(el=>el.productName.toLowerCase().includes(search.toLowerCase())&&el.categorie==inputValue)}/>
      <Footer/>
    </div>
  )
}

export default HomePage