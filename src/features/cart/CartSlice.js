import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {            
            state.push(payload)           
        }
        }
})

export const { addToCart } = CartSlice.actions

export default CartSlice.reducer

