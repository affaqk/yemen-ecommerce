import React, { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const TakeEmail = (e) => {
    setEmail(e.target.value)
  }

  const submitForm = () => {
    console.log(email,password);
    
  }
  return (
    <div>
      <div className="container">
        <div className="form text-center">
        <form action="">
          <label htmlFor="">Enter Your Email</label> <br />
          <input type="email" placeholder='Enter your email' value={email} onChange={TakeEmail}/> <br />
          <label htmlFor="">Enter Your Password</label> <br />
          <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
           
        </form>

        <button type='submit' className='btn btn-warning' onClick={submitForm}>Signup</button>
       
        </div>
      </div>
    </div>
  )
}

export default Signup


// onChange event