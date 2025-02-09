import { Product } from '../types/models'

import { displayDecimal } from '../helperFunctions/displayDecimal'

function Cart({
  cart,
  setCart,
}: {
  cart: Product[]
  setCart: React.Dispatch<React.SetStateAction<Product[]>>
}) {
  return (
    <aside className="cart">
      <div className="cart__container">
        <h2>Your Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <div className="cart__items--empty">
            <img
              src="../../assets/images/illustration-empty-cart.svg"
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
                      <button className="cart__delete-btn">
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
            <button className="cart__confirm-btn">Confirm Order</button>
          </div>
        )}
      </div>
    </aside>
  )
}

export default Cart
