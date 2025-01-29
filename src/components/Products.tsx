import { Product, ProductData } from '../types/models'

function Products({ productData }: ProductData) {
  return (
    <div className="products__grid">
      {productData.map((product: Product) => (
        <div className="products__grid-item">
          <img src={product.image.thumbnail} alt={product.name} />
          <button>Add to cart</button>
          <p>{product.category}</p>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Products
