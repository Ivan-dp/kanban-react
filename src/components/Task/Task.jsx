import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Task.scss";

const Task = ({ task, column, card }) => {
    Task.propTypes = {
        task: PropTypes.object.isRequired,
        card: PropTypes.object,
        column: PropTypes.object,
    };

    const columns = useSelector((store) => store);

    const dispatch = useDispatch();

    const deleteTask = (event) => {
        event.preventDefault();
        dispatch({
            type: "DELETE_TASK",
            colKey: columns.indexOf(column),
            cardKey: column.cards.indexOf(card),
            id: task.id,
        });
    };

    return (
        <div className="Task">
            <h3>{task.title}</h3>
            <button
                className="Task__close"
                onClick={(e) => {
                    deleteTask(e);
                }}
            >
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    );
};

export { Task };
