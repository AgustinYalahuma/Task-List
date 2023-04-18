import "./App.css";
import ListaDeTareas from "./components/ListaDeTareas";

// import TaskList from "./components/TaskList";
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1 className="titulo">MIS TAREAS</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
