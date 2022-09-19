import { useState } from "react";
import {Formik, Form, Field} from "formik"

import Header from "./Components/Header";
import "./App.css"

const APIKey = "2nOCFUNPU0RlveD0evnPloJWTnLxPBXb&q"
const URLSearchAPI = "https://api.giphy.com/v1/gifs/search?api_key="

const Nav = ({children}) => {
  return (
    [children]
  )
}

function App() {
  
  const [images, setImages] = useState([])

  return (
   <div>
    <header>
      <div className="contenedor-header">
        <Header />
        <Nav>
          <Formik
            initialValues={{search: ""}}
            onSubmit={async values => {
              const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKey}=${values.search}&limit=20&offset=0&rating=g&lang=es`)
              const data = await response.json()
              console.log(data.data)
              const dataMapped = data.data.map(e => e.images.fixed_height_downsampled && e.images)
              setImages(dataMapped)
            }}
            >
            <Form>
              <Field name="search" className="input" placeholder="Escribe el GIF que quieras buscar"/>
            </Form>
          </Formik>
        </Nav>
      </div>
    </header>
    <section className="contenedor-section">
      <ul>

      </ul>
    </section>
   </div>
  );
}

export default App;
