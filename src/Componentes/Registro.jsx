/* eslint-disable react/prop-types */
import "./Formulario.css"
import { useState } from "react";

function Registro({ setUser }) {

  const [nombre, setNombre] = useState("")//AQUI VAMOS A GUARDAR LOS USUARIOS  
  const [password, setPassword] = useState("")//AQUI VAMOS A GUARDAR LAS CONTRASEÑAS  
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()//para que no se refresque la pagina

    if (nombre === "" || password === "") {
      setError(true)
      return
    }

    setError(false)

    setUser([nombre])
  }

  return (
    <section className="registro">
      <h3>MixPeliculas</h3>
      <h3>LOGIN</h3>
      <form
        className="formulario"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control"
          type="text"
          value={nombre}
          onChange={e => setNombre(e.target.value)}//capturamos los datos ingresados
          placeholder="Ingresa un Usuario" />

        <input
          className="form-control"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}//capturamos los datos ingresados
          placeholder="Ingresa un Contraseña" />
        <button className="btn btn-primary">Iniciar Sesion</button>
        {error && <div className="alert alert-danger" role="alert">
          Todos los campos son Obligatorios!
        </div>}
      </form>

    </section>
  )
}

export default Registro;
