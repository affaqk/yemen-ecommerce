import React from 'react'
import Age from './Age';
import { products3 } from './data';
import Product from './Product';

const Contact = () => {

    return (
        <div>
            <div className="container">
                <div className="row products g-5 mt-5">
                    <h1 className='mt-4 mb-4 text-center'>Contact us</h1>
                    {
                        products3.map((product) => (
                            <Product product={product}/>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Contact


// Props ( data transfer from one component to another component )

// parent => contact.jsx
// child => Age.jsx
