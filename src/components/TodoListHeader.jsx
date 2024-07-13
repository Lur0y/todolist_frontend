import './../styles/TodoListHeader.scss';

export default function TodoListHeader(){

    return(
        <div className="todo-list-header-container">
            <h1 className='todo-list-header-day'>Hoy</h1>
            <div className='todolist-header-task-indicator'>
                <i className="fa-regular fa-circle-check little-icon"></i>
                <h6 className='todo-list-header-task-quantity'>6 tareas</h6>
            </div>
        </div>
    );

}