import React from 'react'

const Product = ({ product }) => {
    console.log(product);

    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img src={product.img} alt="" />
            <h2 className="mt-3 mb-3">{product.title}</h2>
            <p>Price : {product.price}</p>
            {
                product.stocks ? (
                    <>
                        <p>Stocks : {product.stocks}</p>
                    </>
                ) : null
            }
            {
                product.description ? (
                    <>
                        <p>{product.description}</p>
                    </>
                ) : null
            }

            
            <button className="btn btn-warning">Buy Now</button>

        </div>
    )
}

export default Product


// instead of ifelse we have to use ternary operators in jsx
// let age = 18;
// if(age >= 18){
//       console.log("You are allowed to play game")
//   } else {
//       console.log("You are not allowed")
// }

// age >= 18 ? ( console.log("You are allowed ")) : (console.log("You are not allowed "))

// how can we manage apis