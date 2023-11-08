import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik"

import Header from "./Components/Header";
import "./App.css"

const APIKey = "2nOCFUNPU0RlveD0evnPloJWTnLxPBXb&q"
// const URLSearchAPI = "https://api.giphy.com/v1/gifs/search?api_key="

const CallAPIGIFs = (v) => {
  console.log("renderizando CallAPIGIFs")
  const [images, setImages] = useState([])

  useEffect((v) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKey}=${v.search}&limit=20&offset=0&rating=g&lang=es`)
      .then((res) => res.json())
      .then((data) => {
        const dataMapped = data.data.map(e => e.images.fixed_height_downsampled && e.images)
        setImages(dataMapped)
      })
  }, [v])
  console.log(`Images = ${images}`)
  return images 
}

const Nav = ({ children }) => {
  console.log("renderizando Nav")

  return (
    [children]
  )
}

function App() {
  const [value, setValue] = useState("")

  return (
    <div>
      <header>
        <div className="contenedor-header">
          <Header />
          <Nav>
            <Formik
              initialValues={{ search: "" }}
              onSubmit={v => {
                setValue(v)
                const resGIFAPI = CallAPIGIFs(value)
                console.log({ resGIFAPI })
              }}

            // onSubmit={async values => {
            //   CallAPIGIFs()
            //   // const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKey}=${values.search}&limit=20&offset=0&rating=g&lang=es`)
            //   // const data = await response.json()
            //   // console.log(data.data)
            //   // const dataMapped = data.data.map(e => e.images.fixed_height_downsampled && e.images)
            //   // setImages(dataMapped)
            // }}
            >
              <Form>
                <Field name="search" className="input" placeholder="Escribe el GIF que quieras buscar" />
              </Form>
            </Formik>
          </Nav>
        </div>
      </header>
      <section className="contenedor-section">
        <ul>
          <pre>
            
          </pre>
        </ul>
      </section>
    </div>
  );
}

export default App;
