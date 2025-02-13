import { useRef } from 'react'

import { Product, ActiveProducts } from '../types/models'

import { displayDecimal } from '../helperFunctions/displayDecimal'

function Cart({
  cart,
  setCart,
  setActiveProducts,
}: {
  cart: Product[]
  setCart: React.Dispatch<React.SetStateAction<Product[]>>
  setActiveProducts: React.Dispatch<React.SetStateAction<ActiveProducts>>
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId))
    setActiveProducts((prev) => {
      const newData = { ...prev }
      delete newData[productId]
      return newData
    })
  }

  const clearCart = () => {
    setCart([])
    setActiveProducts({})
  }

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
      dialogRef.current.focus()
    }
  }

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
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
                  {cart.map((product: Product) => (
                    <tr key={product.id}>
                      <td>
                        <span className="cart__title">{product.name}</span>
                        <br></br>
                        <span className="cart__volume">{product.qty}x</span>
                        <span className="cart__price">
                          @ ${displayDecimal(product.price)}
                        </span>
                        <span className="cart__total">
                          ${displayDecimal(product.price * (product.qty ?? 0))}
                        </span>
                      </td>
                      <td className="cart__delete-td">
                        <button
                          onClick={() => removeFromCart(product.id)}
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
                  ))}

                  <tr>
                    <td>Order Total</td>
                    <td className="cart__order-total">
                      $
                      {displayDecimal(
                        cart.reduce(
                          (accumulator, product: Product) =>
                            accumulator + product.price * (product.qty ?? 0),
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
                {cart.map((product: Product) => (
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
                      <br></br>
                      <span className="dialog__volume">{product.qty}x</span>
                      <span className="dialog__price">
                        @ ${displayDecimal(product.price)}
                      </span>
                    </td>
                    <td className="dialog__total-td">
                      <span className="dialog__total">
                        ${displayDecimal(product.price * (product.qty ?? 0))}
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
                        (accumulator, product: Product) =>
                          accumulator + product.price * (product.qty ?? 0),
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
    </>
  )
}

export default Cart
