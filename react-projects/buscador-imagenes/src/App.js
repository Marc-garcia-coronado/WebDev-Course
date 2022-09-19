import { Formik, Form, Field } from "formik"
import {useState} from "react"
import "./header.css"
import "./content.css"
import "./article.css"


function App() {
  const [photos, setPhotos] = useState([])
  const open = url => window.open(url)
  console.log({photos})
  return (
    <div>
      <header>
        <Formik 
          initialValues={{search: ""}}
          onSubmit={async values => {
            // llamar api unsplash
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
              headers: {
                "Authorization": "Client-ID ofAJK2dqqPyf1FpJmFdb6XaImM3Y5AUp9wXUqdf33HM"
              }
            })
            const data = await response.json()
            setPhotos(data.results)
          }}
        >
          <Form>
            <Field 
              name="search"
            />
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {photos.map(photo => 
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img src={photo.urls.regular} />
              <p>{[photo.description, photo.alt_description].join(" - ")}</p>
            </article>
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
