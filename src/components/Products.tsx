import { useState } from 'react'
import { Product, ProductData } from '../types/models'

function Products({ productData }: ProductData) {
  const [activeProducts, setActiveProducts] = useState<{
    [key: string]: boolean
  }>({})

  const [cart, setCart] = useState<Product[]>([])

  const handleAddToCart = (product: Product) => {
    const productId = product.id
    setActiveProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }))
    setCart((prev: Product[]) => [...prev, { ...product, qty: 1 }])

    console.log('activeProducts: ', activeProducts)
    console.log('cart: ', cart)
  }

  const handleQtyChange = (productId: number, qty: number) => {
    setCart((products) =>
      products.map((product) =>
        productId === product.id
          ? { ...product, qty: (product.qty ?? 0) + qty }
          : product
      )
    )
    console.log('cart: ', cart)
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
                <button
                  onClick={() => handleQtyChange(product.id, -1)}
                  className="product__qty-btn"
                >
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
                {cart.find((item) => item.id === product.id)?.qty || 1}
                <button
                  onClick={() => handleQtyChange(product.id, 1)}
                  className="product__qty-btn"
                >
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
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
            )}
          </div>
          <p className="product__category">{product.category}</p>
          <p className="product__name">{product.name}</p>
          <p className="product__price">
            ${Number.parseFloat(product.price.toString()).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Products
