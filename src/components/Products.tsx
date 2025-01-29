import { Product, ProductData } from '../types/models'

function Products({ productData }: ProductData) {
  return (
    <div className="products__grid">
      {productData.map((product: Product) => (
        <div className="product">
          <div className="product__img-container">
            <img src={product.image.desktop} alt={product.name} />
            <button className="product__button">Add to cart</button>
          </div>
          <p>{product.category}</p>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Products
