import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../features/counter/CounterSlice'
import CartSlice from '../features/cart/CartSlice'

export const store = configureStore({
  reducer: {
     counter: CounterSlice,
     cart: CartSlice
  },
})
