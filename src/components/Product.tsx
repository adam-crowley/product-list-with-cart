import { ProductProps } from '../types/models'
import { displayDecimal } from '../helperFunctions/displayDecimal'
import { useCartStore } from '../store/cartStore'
import IncreaseQtyBtn from './IncreaseQtyBtn'
import DecreaseQtyBtn from './DecreaseQtyBtn'
import AddToCartBtn from './AddToCartBtn'

function Product({ product }: ProductProps) {
  const { cart } = useCartStore()

  return (
    <div className="product">
      <div className="product__img-container">
        <div className="product__img-wrapper">
          <picture>
            <source media="(min-width: 992px)" srcSet={product.image.desktop} />
            <source media="(min-width: 768px)" srcSet={product.image.tablet} />
            <img src={product.image.mobile} alt={product.name} />
          </picture>
        </div>
        {cart.find((item) => item.id === product.id)?.active ? (
          <div className="product__qty-selector">
            <DecreaseQtyBtn product={product} />
            {cart.find((item) => item.id === product.id)?.qty}
            <IncreaseQtyBtn product={product} />
          </div>
        ) : (
          <AddToCartBtn product={product} />
        )}
      </div>
      <p className="product__category">{product.category}</p>
      <p className="product__name">{product.name}</p>
      <p className="product__price">${displayDecimal(product.price)}</p>
    </div>
  )
}

export default Product
