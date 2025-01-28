import data from './data.json'

function App() {
  return (
    <>
      <div className="container">
        <main className="main">
          <section className="products">
            <h1>Desserts</h1>
            <div className="products__grid">
              {data.map((product) => (
                <div className="products__grid-item">
                  <img src={product.image.thumbnail} alt={product.name} />
                  <button>Add to cart</button>
                  <p>{product.category}</p>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          </section>
          <aside className="cart">
            <h2>Your Cart</h2>
          </aside>
        </main>
        <footer className="footer">
          <p>
            Challenge by{' '}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{' '}
            <a href="https://github.com/adam-crowley">Adam Crowley</a>.
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
