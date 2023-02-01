import { useState ,useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleDisplayData } from "../Redux/action"

const Filters = () =>{
    const [originalData,setOriginalData]= useState([])
    const [newData,setNewData]= useState([])
    let data = useSelector(state=>state.productData)
    const [filterData,setFilterData]= useState([])
    const dispatch=useDispatch();

    const getData = ()=>{
        setOriginalData(data)
        setNewData(data)

    }
    
    useEffect(()=>{
        getData()
    },[data,filterData])
    
    
    
    const applyColor = (e) =>{
            console.log(originalData)
            console.log("clicked color")
        const colorData=newData.filter((el)=>{
            return el.color === e.target.name
        })
        console.log(colorData)
            setFilterData(filterData=>[...filterData,...colorData])
            console.log(filterData)
            dispatch(handleDisplayData(filterData))
         }
        const applyGender = (e) =>{
            console.log(e.target.checked)
            console.log(e.target.name)
       }
    const applyPrice = (e) =>{
            console.log(e.target.checked)
            console.log(e.target.name)
       
    }
    const applyType = (e) =>{
            console.log(e.target.checked)
            console.log(e.target.name)
       
    }
    return(
        <>
        <div>
            <div>Colour
                <input type="checkbox" name="Red"  onClick={applyColor} />
                <label htmlFor="red">Red</label>
                <input type="checkbox" name="Blue" id="" onClick={applyColor}/>
                <label htmlFor="">Blue</label>
                <input type="checkbox" name="Green" id="" onClick={applyColor}/>
                <label htmlFor="">Green</label>
                <input type="checkbox" name="Black" id="" onClick={applyColor}/>
                <label htmlFor="">Black</label>
            </div>
            <div>Gender
                <input type="checkbox" name="male" id="" onClick={applyGender}/>
                <label htmlFor="">Male</label>
                <input type="checkbox" name="female" id="" onClick={applyGender}/>
                <label htmlFor="">Female</label>
            </div>
            <div>price
                <input type="checkbox" name="250" id="" onClick={applyPrice}/>
                <label htmlFor="">0-Rs250</label>
                <input type="checkbox" name="450" id="" onClick={applyPrice}/>
                <label htmlFor="">Rs251-Rs450</label>
                <input type="checkbox" name="450" id="" onClick={applyPrice}/>
                <label htmlFor="">Rs450</label>
            </div>
            <div>Type
                <input type="checkbox" name="polo" id="" onClick={applyType}/>
                <label htmlFor="">Polo</label>
                <input type="checkbox" name="hoodie" id="" onClick={applyType}/>
                <label htmlFor="">Hoodie</label>
                <input type="checkbox" name="basic" id="" onClick={applyType}/>
                <label htmlFor="">Basic</label>
            </div>
        </div>
        </>
    )
}
export default Filters