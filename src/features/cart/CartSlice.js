import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const productExists = state.find((e) => e.id == payload.id)
            if (productExists != undefined) {
                productExists.cantidad += payload.cantidad
                productExists.total = productExists.precio * productExists.cantidad
            } else {
                state.push(payload)
            }
        },
        deleteToCart: (state, { payload }) => {
            const deleteProduct = state.find((e) => e.id == payload)
            if(deleteProduct.cantidad > 1){
                 deleteProduct.cantidad -= 1
                 deleteProduct.total -= deleteProduct.precio
            }else{
                state.splice(state.indexOf(deleteProduct),1)
            }
        }
    },
   
})

export const { addToCart, deleteToCart } = CartSlice.actions

export default CartSlice.reducer

