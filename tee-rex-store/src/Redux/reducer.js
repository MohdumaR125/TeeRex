import { product_Data,display_Data } from "./actionType";

const initState={
    productData :[],
    displayData : []
}

const reducer = (state=initState,action) => {
    switch(action.type){

        case (product_Data):{
           
            return {
                ...state,
                productData:action.payload
            }
        }
        case (display_Data):{
           
            return {
                ...state,
                displayData:action.payload
            }
        }
        
        default:
            return state
    }
}
export default reducer;