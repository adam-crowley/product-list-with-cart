import { useState } from 'react'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Products from './components/Products'
import data from './data.json'
import { Product } from './types/models'

function App() {
  const [cart, setCart] = useState<Product[]>([])

  return (
    <>
      <div className="container">
        <main className="main">
          <section className="products">
            <h1>Desserts</h1>
            <Products productData={data} cart={cart} setCart={setCart} />
          </section>
          <Cart cart={cart} setCart={setCart} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
