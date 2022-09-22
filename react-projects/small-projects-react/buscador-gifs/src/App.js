import { useState } from "react";
import { Formik, Form, Field } from "formik"

import Header from "./Components/Header";
import "./App.css"

const APIKey = "2nOCFUNPU0RlveD0evnPloJWTnLxPBXb&q"
// const URLSearchAPI = "https://api.giphy.com/v1/gifs/search?api_key="
// https://api.giphy.com/v1/gifs/search?api_key=${APIKey}=${v.search}&limit=20&offset=0&rating=g&lang=es

// const CallAPI = (value) => {
//     console.log("renderizando callAPI")
//     console.log({ value })
//     useEffect(() => {

//         // .then((res) => res.json())
//         // .then((data) => {
//         //     console.log(data)
//         //     const dataMapped = 
//         //     console.log(`renderizando dataMapped ${dataMapped}`)
//         // })
//     }, [])
// }


function App() {
    const [gifs, setGIFS] = useState([])
    console.log({ gifs })
    return (
        <>
            <header>
                <div className="contenedor-header">
                    <Header />
                    <Formik
                        initialValues={{ search: "" }}
                        onSubmit={async values => {
                            let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKey}=${values.search}&limit=20&offset=0&rating=g&lang=es`).then(res => res.json())
                            // console.log(`response json ${{ response }}`)
                            // console.log({ response })
                            const responseMapped = response.data.map(e => e.images.fixed_height_downsampled)
                            // console.log(`response despues del map`)
                            // console.log(responseMapped)
                            setGIFS(responseMapped)
                        }
                        }
                    >
                        <Form>
                            <Field name="search" placeholder="Search..." className="input"/>
                        </Form>
                    </Formik>
                </div>
            </header>
            <div className="centrar">
                <div className="contenedor-article">
                    {gifs.map(gif => {
                        return (
                            <article key={gif.url} onClick={() => window.open(gif.url)}>
                                <img src={gif.url} alt="gif" />
                            </article>
                        )
                    })}
                </div>
            </div>

        </>
    );
}

export default App;
