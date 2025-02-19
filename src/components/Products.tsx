import { ProductItem } from '../types/models'
import productData from '../data.json'
import Product from './Product'

function Products() {
  return (
    <div className="products__grid">
      {productData.map((product: ProductItem) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products
