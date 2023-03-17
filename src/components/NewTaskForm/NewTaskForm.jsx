import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import "./NewTaskForm.scss";

const NewTaskForm = (props) => {
    NewTaskForm.propTypes = {
        card: PropTypes.object.isRequired,
        column: PropTypes.object.isRequired,
    };

    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const addNewTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    const addNewTask = (e) => {
        e.preventDefault();
        if (title) {
            dispatch({
                type: "ADD_TASK",
                title: title,
                colId: props.column.id,
                cardId: props.card.id,
            });
        }
        setTitle("");
    };
    return (
        <div className="NewTaskForm">
            <form>
                <input
                    value={title}
                    onChange={(event) => {
                        addNewTitle(event);
                    }}
                    placeholder="Enter the task name"
                    maxLength={35}
                />
                <button
                    onClick={(event) => {
                        addNewTask(event);
                    }}
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export { NewTaskForm };
