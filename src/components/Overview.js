import React from 'react';

const Overview = ({ deleteTask, tasks, number }) => {
    return (
        <div>
            {tasks.map((oneTask) => {
                return <div key={oneTask.id}>
                    {++number}: {oneTask}
                    <button onClick={() => deleteTask(oneTask)}>Delete</button>

                </div>
            })}
        </div>
    )
}

export default Overview;
