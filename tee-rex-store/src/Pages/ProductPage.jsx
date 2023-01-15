import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import Cards from "../Components/Cards"
import Navbar from "../Components/Navbar"
import Search from "../Components/Search"
import { handleProductData } from "../Redux/action"
import { handleDisplayData } from "../Redux/action"

const ProductPage = () =>{
  

    const dispatch = useDispatch();
    
    const getProductData = async() => {
        const res= await fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`);
        const data= await res.json();
        dispatch(handleProductData(data))
        dispatch(handleDisplayData(data))
    }

    useEffect(()=>{
        getProductData()
    },[])

    return (
        <>
        <Navbar/>
        <Search />
        <Cards />   
        </>
    )

}
export default ProductPage