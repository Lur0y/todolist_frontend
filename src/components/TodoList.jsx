import './../styles/TodoList.scss';
import TodoListHeader from './TodoListHeader.jsx';
import TodoListTask from './TodoListTask.jsx';

export default function TodoList(){

    return(
        <main className='todolist-container'>
            <TodoListHeader />
            <TodoListTask title="Crear una lista de tareas" project="Proyecto personal">
                Elaborar el front de una lista de tareas en React
            </TodoListTask>
            <TodoListTask title="Crear un botón funcional de Agregar tarea" project="Proyecto personal" />
            { /*<TodoListAddTaskButton /> */}
        </main>
    );

}