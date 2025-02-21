import { useEffect, useRef } from 'react'
import { CartItem, DialogProps } from '../types/models'
import { displayDecimal } from '../helperFunctions/displayDecimal'
import { useCartStore } from '../store/cartStore'

function Dialog({ isOpen, closeDialog }: DialogProps) {
  const { cart, clearCart } = useCartStore()
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal()
      dialogRef.current?.focus()
    } else {
      dialogRef.current?.close()
    }
  }, [isOpen])

  return (
    <dialog ref={dialogRef} tabIndex={0} className="dialog">
      <div onClick={() => closeDialog()} className="dialog__bg"></div>
      <div className="dialog__content">
        <img
          className="dialog__confirm"
          src="/assets/images/icon-order-confirmed.svg"
          alt="Order confimed icon"
        />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
        <div className="dialog__table-wrapper">
          <table className="dialog__table">
            <tbody>
              {cart.map((product: CartItem) => (
                <tr key={product.id}>
                  <td className="dialog__thumb-td">
                    <img
                      className="dialog__thumb-img"
                      src={product.image.thumbnail}
                      alt={product.name}
                    />
                  </td>
                  <td>
                    <span className="dialog__title">{product.name}</span>
                    <span className="dialog__volume">{product.qty}x</span>
                    <span className="dialog__price">
                      @ ${displayDecimal(product.price)}
                    </span>
                  </td>
                  <td className="dialog__total-td">
                    <span className="dialog__total">
                      ${displayDecimal(product.price * product.qty)}
                    </span>
                  </td>
                </tr>
              ))}

              <tr>
                <td colSpan={2}>Order Total</td>
                <td className="dialog__order-total">
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
        </div>
        <button
          className="dialog__confirm-btn"
          onClick={() => {
            closeDialog()
            clearCart()
          }}
        >
          Start New Order
        </button>
      </div>
    </dialog>
  )
}

export default Dialog
