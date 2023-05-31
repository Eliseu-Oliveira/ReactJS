import React from 'react';

const TaskItem = ({ title, completed, onTaskComplete }) => {
    const handleTaskComplete = () => {
        onTaskComplete(title);
    };

    return (
        <div>
            <h3>{title}</h3>
            <span onClick={handleTaskComplete}>
                {completed ? 'Concluído' : 'Pendente'}
            </span>
        </div>
    );
};

export default TaskItem;
