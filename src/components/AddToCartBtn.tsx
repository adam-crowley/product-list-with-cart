import { ProductProps } from '../types/models'
import { useCartStore } from '../store/cartStore'

function AddToCartBtn({ product }: ProductProps) {
  const { addToCart } = useCartStore()

  return (
    <button className="product__button" onClick={() => addToCart(product)}>
      Add to cart
    </button>
  )
}

export default AddToCartBtn
