import { useEffect } from 'react'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Products from './components/Products'
import { useCartStore } from './store/cartStore'

function App() {
  const { cart } = useCartStore()

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
          <Cart />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
