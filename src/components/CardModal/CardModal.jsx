import React from "react";
import { PropTypes } from "prop-types";
import "./CardModal.scss";
import { Task, NewTaskForm } from "../";

const CardModal = (props) => {
    CardModal.propTypes = {
        active: PropTypes.bool.isRequired,
        setActive: PropTypes.func.isRequired,
        card: PropTypes.object.isRequired,
        column: PropTypes.object.isRequired,
    };
    return (
        <div
            className={props.active === false ? "CardModal" : "CardModal active"}
            onClick={() => {
                props.setActive(!props.active);
            }}
        >
            <div
                className="CardModal__content"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="CardModal__header">
                    <h3>{props.card.title}</h3>
                </div>
                <div className="CardModal__body">
                    <NewTaskForm column={props.column} card={props.card} />
                    {props.card.tasks.map((task) => {
                        return <Task key={task.id} task={task} column={props.column} card={props.card} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export { CardModal };
