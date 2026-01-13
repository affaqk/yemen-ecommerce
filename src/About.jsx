import React from 'react'
import { products2 } from './data'
import Product from './Product'

const About = () => {
  return (
    <div className='container m-4'>
      <div className="row">
        <div className="left-child col-sm-6 col-12 text-center">
          <img src="/images/profile.jpg" alt="" />
        </div>

        <div className="right-child col-sm-6 col-12">
          <h1>My Introduction</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odio laboriosam itaque ab architecto optio assumenda rem cumque. Mollitia ea laudantium ipsa incidunt eos cumque totam distinctio commodi quia nam.</p>
        </div>
      </div>

      <div className="row products mt-5 g-5">
        <h1 className='mt-4 mb-4 text-center'>About Us Products</h1>
        {
          products2.map((product)=>(
            <Product product={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default About
