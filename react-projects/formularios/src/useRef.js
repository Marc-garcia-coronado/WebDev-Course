import { useRef } from "react"

const App = () => {
    const input = useRef()
    const submit = () => {
        console.log(input.current.value)
    }

    return (
        <div>
            <div>
                <span>Lala</span>
                <input type="text" name="campo" ref={input}/>
            </div>
            <input type="submit" value="Enviar" onClick={submit} />
        </div>
    )
}

export default App