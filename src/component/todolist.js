import React from 'react';
import TodoItem from './todoItem';

const TodoList = ({list, removeTask, onUpdateTask}) => {
    const styles = {
        listStyle: 'none',
        textAlign: 'left',
    };

    return (
        <div>
            <ul style={styles}>
                {
                    list.map(item => {
                        return <TodoItem item={item} key={item._id} removeTask={removeTask} onUpdateTask={onUpdateTask} />
                    })                    
                }
            </ul>
        </div>
    )
}

export default TodoList;