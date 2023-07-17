import React from 'react';
import Task from './Task';
import {useSelector} from 'react-redux';
import "./Task.css";

function TasksList(props) {

    const tasks = useSelector(state => state.todo);
    return (
        <div className='tasksList'>
            {tasks.map((task) => (<Task task={task}  />))
}
        </div>
    )
}

export default TasksList