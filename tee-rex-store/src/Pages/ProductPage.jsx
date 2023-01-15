import { useEffect } from "react"
import { useState } from "react"
import Cards from "../Components/Cards"
import Navbar from "../Components/Navbar"
import Search from "../Components/Search"

const ProductPage = () =>{
    const [productData,setProductData] = useState([])
    
    const getProductData = async() => {
        const res= await fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`);
        const data= await res.json();
        setProductData(data);
    }

    useEffect(()=>{
        getProductData()
    },[])

    return (
        <>
        <Navbar/>
        <Search data={productData}/>
        <Cards data={productData}/>   
        </>
    )

}
export default ProductPage