import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./component/todolist";
import api from './api';

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [updatedTask, setUpdatedTask] = useState({});

  const getTasks = () => {
    // Make a request for a user with a given ID
    api.get('tasks')
    .then(function (response) {
      // handle success
      if (response.ok) {
        setTodoList(response.data);
      }
    })
  };

  useEffect(() => {
    getTasks();
  }, [])

  const addTodoList = (t) => {
    if (!t) return;
      const dataToPost = {
        name: t
      }
      api.post('tasks', dataToPost)
      .then((response) => {
        if (response.ok) {
          setTask('');
          getTasks();
        }
      });
  };

  const removeTask = ({_id}) => {
    api.delete(`tasks/${_id}`)
    .then((response) => {
      if (response.ok) {
        getTasks();
      }
    });
  };

  const handleChangeTask = (e) => {
    setTask(e.target.value);
  }

	return (
		<div className="App">
      <h1>To do list</h1>
			<div>
        <form onSubmit={(e) => {e.preventDefault(); addTodoList(task)}}>
          <input type="text" value={task} onChange={handleChangeTask} style={{marginRight: 10}} />
          <button type="submit">Save</button>
        </form>
			</div>
			<TodoList list={todoList} removeTask={removeTask} onUpdateTask={getTasks} />
		</div>
	);
}

export default App;
