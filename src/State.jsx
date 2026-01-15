import React, { useState } from 'react'

const State = () => {

    // let num = 10;

    const [num, setNum] = useState(7) // initial value
    const Increment = () => {
        setNum(num+7)
    }

    const Decrement = () => {
        setNum(num-1)
    }
  return (
    <div className='container text-center mt-5'>
      <h1>{num}</h1>
      <button className='btn btn-warning me-4' onClick={Increment}>Table of {num}</button>
      <button className='btn btn-secondary ms-3' onClick={Decrement}>-</button>
    </div>
  )
}

export default State


// First state is useState() you can call it hook as well