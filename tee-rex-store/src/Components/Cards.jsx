import { useEffect } from "react";
import { useState } from "react"
import { useSelector } from "react-redux"

const Cards = () =>{
    let data=useSelector(state=>state.displayData)
    
    useEffect(()=>{},[data])

        return(
            <>
        <div>
            {data.map((el)=>(
                <div key={el.id+el.imageURL}>
                    <div ><img src={el.imageURL} alt="product image" /></div>
                    <h4>{el.name}</h4>
                    <div>
                        <h5>{el.price}</h5>
                        <button>Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )

}
export default Cards