import React from 'react'
import {useDispatch} from 'react-redux';
import {deleteTask, toggleTask} from '../redux';

function Task(props) {

    const dispatch = useDispatch();
    return (
        <div>
            <div class="taskCard bg-lime-500 max-w-sm rounded overflow-hidden shadow-lg">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{props.task.title}</div>
                    <p class="text-gray-700 text-base">
                        {props.task.description}
                    </p>
                    <br/>
                    <div class="flex items-center mb-4">
                        <input
                            checked={props.task.done}
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            onChange={() => dispatch(toggleTask(props.task.id))}
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                        <label
                            for="default-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{props.task.done
                                ? "Completed"
                                : "Not done yet"}</label>

                        
                                
                        <button
                            onClick={() => {
                            dispatch(deleteTask(props.task.id))
                        }}
                            type="button"
                            class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-small rounded-full text-sm px-3 py-2.5 mx-2 text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Task
