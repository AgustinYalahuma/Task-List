import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/TareaFormulario.css";

function TareaFormulario(props) {
  const [input, setInput] = useState("");
  //Esta función actualiza el valor del input dependiendo de lo escrito por el usuario
  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    //evita que se recargue la pagina cuando se envia el formulario
    e.preventDefault();
    //hacemos que la tarea sea un objeto que tenga un identificador unico, el texto sea el escrito en el input completada=False
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    setInput("");
    e.target.firstChild.value = "";
    //Aquí usamos la función que nos mando el props para actualmente mostrar un mensaje en consola
    props.onSubmit(tareaNueva);
  };

  return (
    //cuando se envia el formulario se llama a la función manejarEnvio
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        autoComplete="off"
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        //Por cada cambio que haya en el input se cambiará el valor de 'input'
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}
export default TareaFormulario;
