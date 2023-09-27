import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:1
}

export const CounterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
             state.value += 1
        },
        decrement:(state)=>{
           if(state.value > 1){
            state.value -= 1
           }
        },
        reset:(state)=>{
            state.value = 1
        }
    }
})

export const {increment,decrement,reset} = CounterSlice.actions

export default CounterSlice.reducer