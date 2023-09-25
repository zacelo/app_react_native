import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const popo = state.find((e) => e.id == payload.id)
            if (popo != undefined) {
                popo.cantidad += payload.cantidad
                popo.total = popo.precio * popo.cantidad
            } else {
                state.push(payload)
            }
        }
    }
})

export const { addToCart } = CartSlice.actions

export default CartSlice.reducer

