import {configureStore, createSlice} from "@reduxjs/toolkit";

const id = 2;

const todoSlice = createSlice({
    name: "todo",
    initialState: [
        {
            id: 1,
            title: "Creation React project",
            description: "Creation of React project for learning Redux.",
            done: false
        }, {
            id: 2,
            title: "Finish tutorials",
            description: "Finish all tutorials for learning React-Redux",
            done: false
        }
    ],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: ++state[state.length - 1].id,
                title: action.payload.title,
                description: action.payload.description,
                done: false
            }

            state.push(newTask);
        },
        toggleTask: (state, action) => {
            const task = state.find(t => t.id == action.payload);
            task.done = !task.done;
        },
        deleteTask: (state, action) => {
            state = state.filter((t) => t.id !== action.payload);
            return state;
        }
    }

});

export const {addTask, deleteTask, toggleTask} = todoSlice.actions;

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
});

