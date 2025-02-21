import { useState } from 'react'
import { CartItem } from '../types/models'
import { displayDecimal } from '../helperFunctions/displayDecimal'
import { useCartStore } from '../store/cartStore'
import CartProduct from './CartProduct'
import Dialog from './Dialog'

function Cart() {
  const { cart } = useCartStore()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openDialog = () => {
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  return (
    <>
      <aside className="cart">
        <div className="cart__container">
          <h2>Your Cart ({cart.length})</h2>
          {cart.length === 0 ? (
            <div className="cart__items--empty">
              <img
                src="/assets/images/illustration-empty-cart.svg"
                alt="Empty cart image"
              />
              <p>Your added items will appear here</p>
            </div>
          ) : (
            <div className="cart__items--full">
              <table className="cart__table">
                <tbody>
                  {cart.map((product: CartItem) => (
                    <CartProduct key={product.id} product={product} />
                  ))}
                  <tr>
                    <td>Order Total</td>
                    <td className="cart__order-total">
                      $
                      {displayDecimal(
                        cart.reduce(
                          (accumulator, product) =>
                            accumulator + product.price * product.qty,
                          0
                        )
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="cart__message">
                <img
                  src="/assets/images/icon-carbon-neutral.svg"
                  alt="Carbon neutral icon"
                />
                This is a <span>&nbsp;carbon-neutral&nbsp;</span> delivery
              </div>
              <button
                onClick={() => openDialog()}
                className="cart__confirm-btn"
              >
                Confirm Order
              </button>
            </div>
          )}
        </div>
      </aside>
      <Dialog isOpen={isDialogOpen} closeDialog={closeDialog} />
    </>
  )
}

export default Cart
