import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categorySelected:null, 
    productIdSelected:null
}

const ShopSlice = createSlice({
    name:'shop',
    initialState,
    reducers: {
        setCategorySelected: (state, action)=>{
            state.categorySelected= action.payload           
        },
        setProductIdSelected: (state,action)=>{
           state.productIdSelected = action.payload
        },       
    }
})

export const { setCategorySelected, setProductIdSelected} = ShopSlice.actions
export default ShopSlice.reducer