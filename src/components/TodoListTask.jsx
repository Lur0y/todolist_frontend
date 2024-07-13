import { useState } from 'react';
import './../styles/TodoListTask.scss';

export default function TodoListTask({title, children, project}){

    const [isOnCircle, setIsOnCircle] = useState(false);
    const [isHoveringTask, setIsHoveringTask] = useState(false);

    let description = "";
    if(children != undefined){

        description = (children.length > 70)? `${children.slice(0, 70)}...` : children;

    }

    return(
        <div 
            className="todolist-task-container"
            onMouseEnter={() => {setIsHoveringTask(true);}}
            onMouseLeave={() => {setIsHoveringTask(false);}}
        >
            <div className="todolist-task-main-content">
                <div className="todolist-task-left-task-info">
                    <i 
                        className={`todolist-task-icon-check fa-regular fa-circle${(isOnCircle)? "-check" : ""}`} 
                        onMouseEnter={() => {setIsOnCircle(true);}} 
                        onMouseLeave={() => {setIsOnCircle(false);}} 
                    ></i>
                    <p className='todolist-task-title'>{title}</p>
                </div>
                <div className="todolist-task-right-action-buttons">
                    <i className={`fa-regular fa-pen-to-square ${(isHoveringTask)? '' : 'hide'}`}></i>
                    <i className={`fa-solid fa-calendar-check ${(isHoveringTask)? '' : 'hide'}`}></i>
                    <i className={`fa-solid fa-comment ${(isHoveringTask)? '' : 'hide'}`}></i>
                </div>
                
            </div>
            <div className="todolist-task-secondary-content">
                <p className='todolist-task-description'>{description}</p>
            </div>
            <div className='todolist-task-project'>
                <p>{project}</p>
                <i className="fa-solid fa-diagram-project little-icon"></i>
            </div>
            <i className={`todolist-task-move-icon fa-solid fa-up-down-left-right ${(isHoveringTask)? '' : 'hide'}`}></i>
            <i className={`todolist-task-dots-icon fa-solid fa-ellipsis ${(isHoveringTask)? '' : 'hide'}`}></i>
        </div>
    );

}