import { ProductProps } from '../types/models'
import { useCartStore } from '../store/cartStore'

function DecreaseQtyBtn({ product }: ProductProps) {
  const { updateProductQty } = useCartStore()

  return (
    <button
      onClick={() => updateProductQty(product, -1)}
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
  )
}

export default DecreaseQtyBtn
