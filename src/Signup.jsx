import React, { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("")

  const [show, setShow] = useState(false)

  const showValues = () => {
    setShow(true)
  }
  const submitForm = (e) => {
    e.preventDefault()
    console.log(email, password, address, address2, city, country, zip);
  }
  return (
    <div className='container'>
      <h1 className='mt-4 mb-4 text-center'>Signup</h1>
      <form class="row g-3" onSubmit={submitForm}>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" value={password} onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={address2} onChange={(e) => setAddress2(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" value={city} onChange={(e) => setCity(e.target.value)}/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Country</label>
    <select id="inputState" class="form-select" value={country} onChange={(e) => setCountry(e.target.value)}>
      <option selected>Choose...</option>
      <option>Yemen</option>
      <option>Pakistan</option>
      <option>China</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip" value={zip} onChange={(e) => setZip(e.target.value)}/>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" onClick={showValues}>Sign in</button>
  </div>
</form>

  {
    show ? (
      <>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
        <p>Address : {address}</p>
        <p>Address 2 : {address2}</p>
        <p>City : {city}</p>
        <p>Country : {country}</p>
        <p>ZipCode : {zip}</p>
      </>
    ) : null
  }
    </div>
  )
}

export default Signup
