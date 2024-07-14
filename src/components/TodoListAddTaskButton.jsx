import { useState } from 'react';
import './../styles/TodoListAddTaskButton.scss';

export default function TodoListAddTaskButton(){

    const [isHovering, setIsHovering] = useState(false);

    return(
        <div 
            className="todolist-add-task-button-container"
            onMouseEnter={() => {setIsHovering(true);}}
            onMouseLeave={() => {setIsHovering(false);}}
        >
            <div className="todolist-add-task-button"> 
                <div className={(isHovering)? 'task-button-hover-container' : 'task-button-container'}>
                    <i className={(isHovering)? "fa-regular fa-plus task-button-hover" : "fa-regular fa-plus" }></i>
                </div>
                <span className={(isHovering)? 'task-button-text-hover' : ''}>Añadir tarea</span>
            </div>
        </div>
    );

}