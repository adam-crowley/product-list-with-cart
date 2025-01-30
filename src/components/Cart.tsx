function Cart() {
  return (
    <aside className="cart">
      <div className="cart__container">
        <h2>Your Cart</h2>
        {/* <div className="cart__items--empty">
          <img
            src="../../public/assets/images/illustration-empty-cart.svg"
            alt="Empty cart image"
          />
          <p>Your added items will appear here</p>
        </div> */}
        <div className="cart__items--full"></div>
      </div>
    </aside>
  )
}

export default Cart
