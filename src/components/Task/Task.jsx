import React from "react";
import { PropTypes } from "prop-types";
import "./Task.scss";

const Task = ({ task }) => {
    Task.propTypes = {
        task: PropTypes.object.isRequired,
    };
    return (
        <div className="Task">
            <h3>{task.title}</h3>
        </div>
    );
};

export { Task };
