import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../features/counter/CounterSlice'
import CartSlice from '../features/cart/CartSlice'
import ShopSlice from '../features/shop/ShopSlice'

export const store = configureStore({
  reducer: {
     counter: CounterSlice,
     cart: CartSlice,
     shop: ShopSlice
  },
})
