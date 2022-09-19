
export default function Input({setValor}) {

    return (
        <div className="Input">
          <label>Pon Un Numero</label>
          <input 
            type="number" 
            className="Block" 
            onChange={(e) => {
              setValor = e.target.valueAsNumber
              return setValor
            }}
            />
            <br />
            <button type="submit">Enviar</button>
        </div>
    )
}