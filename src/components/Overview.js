import React from 'react';

const Overview = ({ tasks, number }) => {
    return (
        <div>

            {tasks.map((task) => {
                return <div>{++number}: {task}</div>
            })}
        </div>
    )
}

export default Overview;
