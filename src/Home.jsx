import { categories, products } from "./data"
import Product from "./Product"

const Home = () => {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/bag.jpg" class="d-block w-100 slider-img" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/images/necklace.jpg" class="d-block w-100 slider-img" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/images/watch.jpg" class="d-block w-100 slider-img" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <h3 className="mt-4 mb-4 text-center">Categories</h3>
        <div className="row cat-img">
          {
            categories.map((category)=>(
              <>
                <div className="col-sm-2 col-4">
                  <img src={category.img} alt="" />
                  <p>{category.title}</p>
                </div>
              </>
            ))
          }
        </div>
        <h1 className="mt-4 mb-4 text-center">Products</h1>
        <div className="row products mt-5 g-5">
          {
            products.map((product)=>(
              <Product product = {product}/>
            ))
          }
         
        </div>
      </div>
    </>
  )
}

export default Home


// PROPS ( data transfer from one component to another )
// React Router dom ( npm pacakge use for switching between different pages ( with single page application I mean it will not reload the page))