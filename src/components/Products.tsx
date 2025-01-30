import { Product, ProductData } from '../types/models'

function Products({ productData }: ProductData) {
  return (
    <div className="products__grid">
      {productData.map((product: Product) => (
        <div className="product">
          <div className="product__img-container">
            <div className="product__img-wrapper">
              <img src={product.image.desktop} alt={product.name} />
            </div>
            <button className="product__button">Add to cart</button>
          </div>
          <p className="product__category">{product.category}</p>
          <p className="product__name">{product.name}</p>
          <p className="product__price">${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Products
