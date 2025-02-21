import { CartItemProps } from '../types/models'
import { displayDecimal } from '../helperFunctions/displayDecimal'
import { useCartStore } from '../store/cartStore'

function CartProduct({ product }: CartItemProps) {
  const { removeFromCart } = useCartStore()

  return (
    <tr key={product.id}>
      <td>
        <span className="cart__title">{product.name}</span>
        <br></br>
        <span className="cart__volume">{product.qty}x</span>
        <span className="cart__price">@ ${displayDecimal(product.price)}</span>
        <span className="cart__total">
          ${displayDecimal(product.price * product.qty)}
        </span>
      </td>
      <td className="cart__delete-td">
        <button
          onClick={() => removeFromCart(product)}
          className="cart__delete-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
          </svg>
        </button>
      </td>
    </tr>
  )
}

export default CartProduct
