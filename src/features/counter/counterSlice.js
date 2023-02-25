import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    amount: 1
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        multiply: (state ) => {
            state.count *= state.amount
        },
        reset: (state)=>{
            state.count = 0;
            state.amount = 0;
        },
        setAmount: (state,action)=>{
            state.amount = action.payload;
        }
    }
})

export const { increment, decrement, multiply, reset, setAmount} = counterSlice.actions

export default counterSlice.reducer