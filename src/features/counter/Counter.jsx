import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply, reset, setAmount } from './counterSlice'

export const Counter = () => {
   const {count, amount} = useSelector((state) => state.counter)
   const dispatch = useDispatch()

    const handleInc = () => {
       dispatch(increment())
    }
    const handleDec = () => {
        dispatch(decrement())
    }
    const handleMul = () => {
        dispatch(multiply())
    }


     function formatter (text) {
        const textarea = document.createElement("textarea")
        textarea.innerHTML = text
        return textarea.value
     }
  return (
    <div className='counter'>
        <div className='count'>{count}</div>
        <div className='controller'>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
        <div className='mul'>
            <input type="amount" value={amount} 
            onChange={(e) => dispatch(setAmount(e.target.value))} ></input>
            <button onClick={handleMul}>{formatter( "&times;")}</button>
        </div>
        <button onClick={() => dispatch(reset())} >Reset</button>


    </div>
  )
}

