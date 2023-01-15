import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleDisplayData } from "../Redux/action"

const Search = ()=>{
    const data= useSelector(state=>state.productData)
    const dispatch=useDispatch()
    const [text,setText]= useState("")
    const handleChange=(e)=>{
        e.preventDefault();
        const value=e.target.value;
        setText(value)
        if(value===""){
            dispatch(handleDisplayData(data))
        }
    }
    const handleSearch=(e)=>{
        e.preventDefault();
        const filterData=data.filter((el)=>{
            if (text===el.name.toLowerCase() ){                
                return el
            }
            else if(text===el.color.toLowerCase()){
                return el
            }else if(text===el.type.toLowerCase()){
                return el
            } 
        })
        console.log(filterData)
        dispatch(handleDisplayData(filterData))


    }
    return(
        <>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleSearch}>Enter</button>
        </>
    )
}
export default Search