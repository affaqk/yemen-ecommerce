import React from 'react'

const Product = ({product}) => {
    console.log(product);
    
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img src={product.img} alt="" />
            <h2 className="mt-3 mb-3">{product.title}</h2>
            <p>Price : {product.price}</p>
            <button className="btn btn-warning">Buy Now</button>
        </div>
    )
}

export default Product
