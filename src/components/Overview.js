import React from 'react';

const Overview = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task) => {
                return <li>{task}</li>
            })}
        </ul>
    )
}

export default Overview;
