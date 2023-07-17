import {useState} from 'react';
import './App.css';
import TasksHeader from './components/TasksHeader';
import TasksList from './components/TasksList';
import TaskForm from './components/TaskForm';
import { store } from './redux';
import { Provider } from 'react-redux';

function App() {

    return (
        <div className='App'>
        <Provider store={store}>
            
                <div >
                    <TasksHeader/>
                    <TasksList/>
                    <br/>
                    <br/>
                    <TaskForm/>
                </div>
            
        </Provider>
        </div>
    );
}

export default App;
