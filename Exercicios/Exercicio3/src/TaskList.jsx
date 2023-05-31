import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Comprar leite', completed: false },
        { id: 2, title: 'Enviar e-mail', completed: true },
        { id: 3, title: 'Fazer exercícios', completed: false },
        { id: 4, title: 'Estudar', completed: true },
        { id: 5, title: 'Passear com os cachorros', completed: false },
        { id: 6, title: 'Fazer janta', completed: true },
        { id: 7, title: 'Revisar matérias', completed: false },
    ]);

    const handleTaskComplete = (title) => {
        const updatedTasks = tasks.map(task => {
            if (task.title === title) {
                return { ...task, completed: true };
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    return (
        <div>
            <h2>Minhas Tarefas</h2>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    title={task.title}
                    completed={task.completed}
                    onTaskComplete={() => handleTaskComplete(task.title)}
                />
            ))}
        </div>
    );
};

export default TaskList;
