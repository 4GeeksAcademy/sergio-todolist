import React, { useState } from "react";

const Home = () => {
	// 1. Controlar el input 
	const [task, setTask] = useState('');
	// 5. Definir el array como un estado para que cuando se modifique se renderice
	const [todos, setTodos] = useState([]);

	// 3. Configuramos la función para el envío del form
	const handleSubmit = (event) => {
		// 4. Controlar el dom
		event.preventDefault();
		// 6. agregar la tarea en un array 
		// 9. bloquear tareas vacías o en blanco Y 10. eliminar espacios en blanco (trim()). 
		if (task.trim() !== '') {
			setTodos([...todos, task])
		}
		// 7. Vaciar la nueva tarea tras enviarla
		setTask('')
		// 8. Verificar que no sea una tarea vacía
	}
	
	// 7. Conficuramos la función delete con filter (a cada iteración le asigna algo) cogiendo el onclick del icono
	const deleteTask = (item) => {
		setTodos(todos.filter((element) => element !== item ))
	  }
	
	return (
		<div className="container mt-5">
			<div className="row">
				<h1 className="title">Tareas</h1>
			</div>
			<div className="main">
				<div className="lista">
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<input type="text" className="form-control" id="exampleInputEmail1" placeholder="Añadir nueva"
							// 2. Poner el valor de mi estado (value) y generar el evento onChange
							// y me envío el event como parámetro
							value={task} onChange={(event) => setTask(event.target.value)}/>
						</div>
					</form>

					<ul className="list-group">
					{todos.map((item, index) => 
					<li key={index} className="list-group-item hidden-icon d-flex justify-content-between">
						{item}
						<span onClick={() => deleteTask(item)}><i className="fa-solid fa-trash-can text-danger"></i></span>
					</li>)}
						<li className="list-group-item d-flex justify-content-end">
						{todos.length} tareas pendientes
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
