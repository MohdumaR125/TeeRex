import { product_Data, display_Data } from "./actionType"


const handleProductData = (payload) =>{
   return {
    type: product_Data,
    payload,
   }
}
const handleDisplayData = (payload) =>{
   return {
    type: display_Data,
    payload,
   }
}
export {handleProductData,handleDisplayData}
