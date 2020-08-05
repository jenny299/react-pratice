import React, { useState, useEffect } from "react";
import api from '../api';

const TodoItem = ({ item, removeTask, onUpdateTask }) => {
	const [task, setTask] = useState(item);
    const [isEditing, setIsEditing] = useState(false);
    
    useEffect(() => {
        saveTask();
    }, [task.isDone]);

	const editTask = (t) => {
        setIsEditing(true);
	};

	const saveTask = () => {
		api.put(`tasks/${task._id}`, task).then((response) => {
			if (response.ok) {
                setIsEditing(false);
				onUpdateTask();
			}
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		saveTask();
	}
	
    const onTaskChange = (e) => {
        setTask({
            ...task,
            name: e.target.value
        });
    };

    const onChangeTaskStatus = (t) => {
        setTask({
            ...task, 
            isDone: !t.isDone
        });
    };

	return (
		<li
			style={{
				textDecoration: !!item.isDone && "line-through",
				marginBottom: 10,
			}}
		>
			<input
				type="checkbox"
				checked={item.isDone}
				onChange={() => onChangeTaskStatus(item)}
			/>
			<span style={{ marginRight: 10 }}>{item.name}</span>
			{isEditing && (
				<form onSubmit={onSubmit}>
					<input type="text" value={task?.name} onChange={onTaskChange} />
					<button type="submit">Save</button>
				</form>
			)}
			{!isEditing && <button onClick={() => editTask(item)}>Edit</button>}
			<button onClick={() => removeTask(item)}>Remove</button>
		</li>
	);
};

export default TodoItem;
