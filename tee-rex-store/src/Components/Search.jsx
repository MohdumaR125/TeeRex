import { useState } from "react"

const Search = (props)=>{
    const {data}=props;
    const [text,setText]= useState("")
    const handleChange=(e)=>{
        e.preventDefault();
        const value=e.target.value;
        setText(value)
    }
    const handleSearch=(e)=>{
        e.preventDefault();
        const filterData=data.filter((el)=>{
            if (text.includes(el.name.toLowerCase()) || text.includes(el.color.toLowerCase()) || text.includes(el.type.toLowerCase()) ){
                
                return el
            } 
        })

    }
    return(
        <>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleSearch}>Enter</button>
        </>
    )
}
export default Search