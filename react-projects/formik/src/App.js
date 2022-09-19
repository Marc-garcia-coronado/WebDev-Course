import { useFormik } from "formik"
import './App.css';



const validate = (values) => {
  const errors = {}
  if(!values.name) {
    errors.name = "Requerido"
  } else if (values.name.length < 5) {
    errors.name = "El nombre es muy corto"
  }
  if(!values.lastname) {
    errors.lastname = "Requerido"
  } else if (values.lastname.length < 5) {
    errors.lastname = "El nombre es muy corto"
  }
  if(!values.mail) {
    errors.mail = "Requerido"
  } else if (values.name.mail < 5) {
    errors.mail = "El apellido es muy corto"
  }

  return errors
}

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      mail: "",
    },
    onSubmit: values => console.log(values),
    validate,
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        type="text"
        {...formik.getFieldProps("name")}
      />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br></br>
      <label>Apellido</label>
      <input 
        type="text"
        {...formik.getFieldProps("lastname")}
      />
      {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
      <br></br>
      <label>Mail</label>
      <input 
        type="email"
        {...formik.getFieldProps("mail")}

        // formik.getFieldProps("mail") => hace todo esto de abajo con solo esta linea de codigo

        // name="mail"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.mail}
      />
      {formik.touched.mail && formik.errors.mail ? <div>{formik.errors.mail}</div> : null}
      <br/>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
