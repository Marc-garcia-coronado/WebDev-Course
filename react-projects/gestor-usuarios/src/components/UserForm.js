import Input from "./Input"
import Button from "./Button"
import useFormulario from "../hooks/useFormulario.js"


const UserForm = ({ submit }) => {
    const [formulario, handleChange, reset] = useFormulario({ name: "", lastname: "", email: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
    }
    return (
        <form onSubmit={handleSubmit}>

                <Input label="Nombre" value={formulario.name} onChange={handleChange} name="name" placeholder="Nombre"/>
                <Input label="Apellido" value={formulario.lastname} onChange={handleChange} name="lastname" placeholder="Apellido"/>
                <Input label="Correo" value={formulario.email} onChange={handleChange} name="email" placeholder="Correo"/>
        
                <Button>Enviar</Button>
        </form>
    )
}


export default UserForm;