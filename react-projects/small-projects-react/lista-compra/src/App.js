// import { useState } from "react";
import "./App.css"
import Header from "./components/Header"




const Carrito = () => {
  return (
    <div className="carrito">
      children
    </div>
  )
}



function App() {
  const productosJSON = [
    {
      name: "Agua",
      image: "productos/Agua.jpg",
      precio: 7
    },
    {
      name: "manzana",
      image: "productos/manzana.jpg",
      precio: 3
    },
    {
      name: "naranja",
      image: "productos/naranja.jpg",
      precio: 10
    },
  ]
  console.log({productosJSON})
  // const productosCarrito = []

  return (
    <>
      <div className="header">
        <div className="contenedor-navegacion">
          <Header />
          <Carrito />
        </div>
      </div>
      <section>
        {productosJSON.map(product => {
          return (
            <div className="products-section" key={product.name}>
              <img src={product.image} alt={product.name}/>
              <p>{product.name}</p>
              <p>{product.precio}</p>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default App;
