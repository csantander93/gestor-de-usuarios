import Input from "./Input"
import Button from "./Button";
import useFormulario from "../hooks/useFormulario";

const  UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: ""
  })
  const handleSubmit = (e) => {
    e.prevendDefault()
    submit(formulario)
    reset()
  }
  return (
    <form onSubmit={handleSubmit}>
            <Input
              label="Nombre"
              name="name"
              value={formulario.name}
              onChange={handleChange}
              placeHolder="Nombre"
            />
            <Input 
              label="Apellido"
              name="lastname"
              value={formulario.lastname}
              onChange={handleChange}
              placeHolder="Apellido"
            />
            <Input 
              label="Correo"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              placeHolder="Correo"
            />
            <Button>Enviar</Button>
          </form>
  )
}

export default UserForm;