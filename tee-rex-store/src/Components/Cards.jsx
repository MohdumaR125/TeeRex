import { useEffect } from "react";
import { useState } from "react"
import { useSelector } from "react-redux"

const Cards = () =>{
    let data=useSelector(state=>state.displayData)
    const [cartData,setCartData]=useState([]);
    
    useEffect(()=>{},[data])
    
    const addToCart = (e)=>{
        const idx=e.target.id;
        let itemNotPresent = cartData.map((el)=>{
            if(el.id==idx){
                return false
            }
        })
        console.log(itemNotPresent)
        if(itemNotPresent){
            const item =data.find((el)=>{
                if(el.id==idx){
                    return el
                }
            })
            setCartData([...cartData,item]);
        }
        console.log(cartData)
    }

        return(
            <>
        <div>
            {data.map((el)=>(
                <div key={el.id+el.imageURL}>
                    <div ><img src={el.imageURL} alt="product image" /></div>
                    <h4>{el.name}</h4>
                    <div>
                        <h5>{el.price}</h5>
                        <button id={el.id} onClick={addToCart}>Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )

}
export default Cards