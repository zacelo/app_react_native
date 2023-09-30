import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/Categories.data";
import { products } from "../../data/Products.data";

const initialState = {
    categories,
    products,
    productFilterByCategories:[],
    categorySelected:null,
    productIdSelected:null
}

const ShopSlice = createSlice({
    name:'shop',
    initialState,
    reducers: {
        setCategorySelected: (state, action)=>{
            state.categorySelected= action.payload
            state.productFilterByCategories = state.products.filter(item => item.categoria == action.payload)            
        },
        setProductIdSelected: (state,action)=>{
           state.productIdSelected = action.payload
        },       
    }
})

export const { setCategorySelected, setProductIdSelected} = ShopSlice.actions
export default ShopSlice.reducer