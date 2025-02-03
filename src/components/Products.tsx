import { useState } from 'react'
import { Product, ProductData } from '../types/models'

function Products({ productData }: ProductData) {
  const [activeProducts, setActiveProducts] = useState<{
    [key: string]: boolean
  }>({})

  const handleClick = (productId: number) => {
    setActiveProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }))
  }

  return (
    <div className="products__grid">
      {productData.map((product: Product) => (
        <div className="product" key={product.id}>
          <div className="product__img-container">
            <div className="product__img-wrapper">
              <img src={product.image.desktop} alt={product.name} />
            </div>
            {activeProducts[product.id] ? (
              <div className="product__qty-selector">
                <button className="product__qty-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="1"
                    fill="none"
                    viewBox="0 0 10 1"
                  >
                    <path d="M0 .375h10v1.25H0V.375Z" />
                  </svg>
                </button>
                1
                <button className="product__qty-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                  >
                    <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                className="product__button"
                onClick={() => handleClick(product.id)}
              >
                Add to cart
              </button>
            )}
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
