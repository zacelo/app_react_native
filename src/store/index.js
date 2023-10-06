import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import CounterSlice from '../features/counter/CounterSlice'
import CartSlice from '../features/cart/CartSlice'
import ShopSlice from '../features/shop/ShopSlice'
import { shopApi } from '../services/ShopApi'

const store = configureStore({
  reducer: {
     counter: CounterSlice,
     cart: CartSlice,
     shop: ShopSlice,
     [shopApi.reducerPath]:shopApi.reducer,     
  },
   middleware:getDefautMiddleware => getDefautMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch)

export default store
