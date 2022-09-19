import { useState } from "react";
import Input from "./Input";


export default function Contador() {
    let valor = 0
    let setValor = 0
    const [contador, setContador] = useState(valor)
    return (
      <section className="Contador">
        <span>{contador}</span>
        <div className="Btn">
          <button
            onClick={() => {
              setContador(contador + 1)
            }}
          >
            Incrementar
          </button>

          <button
            onClick={() => {
              return setContador(contador - 1)
            }}
            >
              Decrementar
          </button>
          <button
            onClick={() => {
              return setContador(valor = setValor)
            }}
            >
              Set Valor
          </button>
        </div>
        <Input setValor/>
      </section>
    );
}