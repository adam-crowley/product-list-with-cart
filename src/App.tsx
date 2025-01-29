import Cart from './components/Cart'
import Footer from './components/Footer'
import Products from './components/Products'
import data from './data.json'

function App() {
  return (
    <>
      <div className="container">
        <main className="main">
          <section className="products">
            <h1>Desserts</h1>
            <Products productData={data} />
          </section>
          <Cart />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
