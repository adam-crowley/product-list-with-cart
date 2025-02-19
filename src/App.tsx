import { useState, useEffect } from 'react'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Products from './components/Products'
import { Product } from './types/models'

function App() {
  const [cart, setCart] = useState<Product[]>([])

  useEffect(() => {
    console.log('Cart: ', cart)
  }, [cart])

  return (
    <>
      <div className="container">
        <main className="main">
          <section className="products">
            <h1>Desserts</h1>
            <Products />
          </section>
          <Cart cart={cart} setCart={setCart} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
